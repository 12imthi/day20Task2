let dataSet; // Assuming dataSet is defined and populated elsewhere
const stateDropdown = document.querySelector(".state")

function total() {
console.log(stateDropdown.value);
    const demo = document.getElementById("demo");
    demo.innerHTML = '';
// console.log(`state`, state);
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    const startDateString = startInput.value;
    const endDateString = endInput.value;

    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    let count = 0;
    console.log(dataSet[stateDropdown.value]); 

    let statwiseData = dataSet[stateDropdown.value];
    // for(let i in data) {
    //     console.log('this.state.'+i);
    //     if ( data[i].dates) {
    //         // console.log(`data[i]`, data[i]);
    //       const datesTN = data[i].dates;
    //       console.log(`datesTN`, datesTN);
    //       dataSet = data[i].dates;
    
    //     }
    // }
console.log("statwiseData", statwiseData);
    for (let i in statwiseData.dates) {
        const currentDate = new Date(i);
        // console.log(i);
        if (currentDate >= startDate && currentDate < endDate) {
            console.log("ifff");
            let div = document.createElement("ul");
            div.textContent = `tolalCovid19 Positive Cases  : day${++count}  =   ${statwiseData.dates[i].total.confirmed}`;
            demo.appendChild(div);
            // console.log(`i`, statwiseData[i].total.confirmed);
        }
        else {
            
        }
    }
}


const res = fetch("https://data.covid19india.org/v4/min/timeseries.min.json");

res
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    dataSet = data;
// 
//      state = i;
//     console.log(state);
// }
// for(let i in data) {
// console.log(i);
// }






// for (let i in data) {
//     // console.log('i',i);
//     state = i;
// }

// Listen for changes in the state dropdown and update the displayed data

      //   console.log(`total`, total);
      //   }
      // const startDate = '2020-03-10';

      // const endDate = '2020-04-10';
      //   if (datesTN[startDate]) {
      //     const dataForstartDate = datesTN[startDate];
      //     // const dataForendDate = datesTN[endDate];
      //     console.log(`Data for ${startDate} in TN:`, dataForstartDate);
      //     // console.log(`Data for ${endDate} in TN:`, dataForendDate);
      //   } else {
      //     console.log(`No data found for  in TN.`);
      //   }
    
  })
  .catch((err) => {
    console.log("API call failed:", err);
  });