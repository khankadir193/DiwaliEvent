const guideBtn = document.getElementById('showDialogButton');
const customeDialog = document.getElementById('customDialog');


guideBtn.addEventListener('click',function (){
    console.log('clicked... on guide button...');
    customeDialog.showModal();
})

document.querySelector('button').addEventListener('click',function (){
    console.log('this is the close button');
    customeDialog.close();
})



// data getting from xlsx file

const SHEET_ID = "1GoCTAdP_gpgf8vZv0MPGGj2GFGUxiCNqpppWBs0C4yQ";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/";
const RANGE = "A3:C13";
const SHEET_TITLE = "test_event";

const SHEET_URL = `${GOOGLE_SHEET_URL}${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${RANGE}`;

fetch(SHEET_URL)
  .then((response) => response.text())
  .then((data) => {
    // console.log("SHEET_URL....//", data);
    const jsonStart = data.indexOf("google.visualization.Query.setResponse(");

    // console.log("jsonStart....---", jsonStart);
    if (jsonStart !== -1) {
      const jsonString = data.substring(
        jsonStart + "google.visualization.Query.setResponse(".length,
        data.length - 2
      );

    //   console.log("jsonString...", jsonString);
      const jsonData = JSON.parse(jsonString);
      console.log(jsonData);

      // Extract rows and columns from the JSON data
      const dataTable = jsonData.table;
      const rows = dataTable.rows;
      const columns = dataTable.cols;

      // Create an HTML table and populate it with the data
      const table = document.createElement('table');
      const thead = table.createTHead();
      const tbody = table.createTBody();
      const headerRow = thead.insertRow();

      // Create table headers
      columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column.label;
        headerRow.appendChild(th);
      });

      // Populate table with data
      rows.forEach(rowData => {
        const row = tbody.insertRow();
        row.className = 'spaced-row';
        rowData.c.forEach(cellData => {
          const cell = row.insertCell();
          cell.textContent = cellData.v;
        });
      });

      // Append the table to a div or a container in your HTML
      const tableContainer = document.getElementById('table-container');
      tableContainer.appendChild(table);

    } else {
      console.error("Data not found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });









//another logic for tab switching
//this logic it's working fine
const tabs = document.querySelectorAll(".tab1");
const content = document.querySelectorAll(".talentContent");

tabs.forEach((tab,i,buttons)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((t) => {
            t.classList.remove('active');
        })
        
        content.forEach((c,ci)=>{
            if(i===ci && i === 0){
                c.classList.add('active');
                c.style.display = "block";
                buttons[1].classList.add("active");
                buttons[0].classList.remove("active"); 
                buttons[0].style.display = "none"; 
            }else if((i === 1 && ci === 1) || (i === 1 && ci === 2) ){
                c.classList.add('active');
                buttons[0].classList.add("active");
                buttons[0].style.display = "block";;
                buttons[1].classList.remove("active");
                c.style.display = 'block';
            }
            else{
                c.classList.remove('active');
                c.style.display = 'none';
            }
        })
    })
});


//crousal code 

    let currentIndex = 0;
    const totalImages = document.querySelectorAll('.crousal-img').length;
    const carousel = document.getElementById('image-carousel');

    function showImage(index) {
        if (index < 0) {
            currentIndex = totalImages - 1;
        } else if (index >= totalImages) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevImage() {
      console.log('clicked......................');
        showImage(currentIndex - 1);
    }

    function nextImage() {
      console.log('nextButtoonClicked................................');
        showImage(currentIndex + 1);
    }


//dance battle tab switching
const danceTab = document.querySelectorAll(".tab2");
const contentTab = document.querySelectorAll(".singing-fashion-content");

danceTab.forEach((tab,i,buttons)=>{
    tab.addEventListener('click',()=>{
        danceTab.forEach((t) => {
            t.classList.remove('active');
        });

        contentTab.forEach((c,ci)=>{

          if(ci===1 && ci === i){
            // c.style.display = 'none';
            danceTab[0].style.opacity = '0';
            danceTab[2].style.opacity = '0';

            //singing button enable
            danceTab[1].style.opacity = '1';

            //this content regarding dance tab and fashion tab should be hide
            contentTab[2].style.display = 'none';
            contentTab[1].style.display = 'none';

            //this content regarding dance tab button should be display
            contentTab[0].style.display = 'block';
          }else if(ci === 2 && ci === i){
            danceTab[0].style.opacity = '0';
            danceTab[1].style.opacity = '0';

            //fashion tab button
            danceTab[2].style.opacity = '1';

            //content Tab for fashion battle should be display
            contentTab[1].style.display = 'block';
            
            //content tab for singing and dance should be hide
            contentTab[2].style.display = 'none';
            contentTab[0].style.display = 'none';
          }else if(ci === 0 && ci === i){
            //this tab button is regarding danceBtn and fashion btn should be hide
            danceTab[1].style.opacity = '0';
            danceTab[2].style.opacity = '0';

            //this button tab regarding dance btn should be display
            danceTab[0].style.opacity = '1';

            //this is the content tab regaring dance button tab should be display
            contentTab[2].style.display = 'block';
            
            //this content tab regarding dance and fashion content should be hide
            contentTab[0].style.display = 'none';
            contentTab[1].style.display = 'none';
          }
        });
    });
});


//user talent button for leader board switching the page

const leaderTab = document.querySelectorAll(".tab3");
const leaderContent = document.querySelectorAll(".leaderContent");

console.log('leaderTab...??',leaderTab);
console.log('leaderContent...???',leaderContent);

leaderTab.forEach((tab,i,buttons)=>{
    tab.addEventListener('click',()=>{
        leaderTab.forEach((t) => {
            t.classList.remove('active');
        })

        console.log('leaderIndex....',i);
        
        leaderContent.forEach((c,ci)=>{
            if(i===ci && i === 1){
                // c.style.display = 'none';
            leaderTab[0].style.opacity = '0';
            leaderTab[1].style.opacity = '1';

            //this content regarding dance tab and fashion tab should be hide
            leaderContent[0].style.display = 'block';
            leaderContent[1].style.display = 'none';

            //this content regarding dance tab button should be display
            leaderContent[2].style.display = 'none';
            }else if(i === 0 && ci === i){
              leaderTab[0].style.opacity = '1';
              leaderTab[1].style.opacity = '0';
  
  
              //this content regarding dance tab and fashion tab should be hide
              leaderContent[0].style.display = 'none';
              leaderContent[0].style.opacity = '0';
  
              //this content regarding dance tab button should be display
              leaderContent[1].style.display = 'flex';
              leaderContent[2].style.display = 'flex';
            }
            // else{
            //     c.classList.remove('active');
            //     c.style.display = 'none';
            // }
        })
    })
});

