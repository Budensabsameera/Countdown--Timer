
document.addEventListener('DOMContentLoaded', () => {
    let inputtime = document.getElementById("inputtime");
    let output = document.getElementById("output");
    let countdownbtn = document.getElementById("countdownbtn");

    countdownbtn.addEventListener('click', () => {
      let inputedtime = new Date(inputtime.value);

      // ✅ Check if input is a valid date
      if (isNaN(inputedtime.getTime())) {
        output.innerHTML = "Please enter a valid date and time!";
        output.classList.add("timeup");
        return;
      }

      output.classList.add("visible");

      // Function to update countdown every second
      function updatetime() {
        let time = new Date();

        let diff = inputedtime - time; //cal the diff b/w the user input time with the current time
        //usually the diff store the time in milliseconds

        // If the countdown is finished
        if (diff < 0) {
          output.innerHTML = "Times UP!!!";
          clearInterval(timer); //whats the point of not stoping by creating a timer when the couhnt is done
          output.classList.add("timeup"); //after time is up i just added a pop up in css
          return;
        }
        // Convert milliseconds to total seconds
        let totalsec = Math.floor(diff / 1000);

        // Calculate days
        let days = Math.floor(totalsec / (3600 * 24));
        // 1 day = 24 hours → 24 * 3600 = 86400 seconds

        // Calculate hours from the remainder after removing full days
        let hours = Math.floor((totalsec % (3600 * 24)) / 3600);
        // Remove days → then divide by 3600 seconds (1 hour)

        // Calculate minutes from the remainder after removing full hours
        let mins = Math.floor((totalsec % 3600) / 60);
        // Remove hours → then divide by 60 seconds (1 minute)

        // Calculate remaining seconds
        let secs = totalsec % 60;
        // Remainder after removing full minutes

        output.innerHTML = `${days}d ${hours}hrs ${mins}min ${secs}sec left!`;
      }

      output.classList.add("visible"); //just making the output visible
      updatetime(); // // Call once immediately to avoid 1-second delay
      let timer = setInterval(updatetime, 1000); //        // Update every second using setInterval
    });
});
  