document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name-information').addEventListener('submit',(event) => {
        event.preventDefault();
        const info = document.querySelectorAll('#name-information input');
        const main = document.getElementById('print-nums');
        let newInfo = [];
        let invention = [
            "Teleportation Device", "Time Machine", "Gravity Boots", "Mind Uploading", "Food Printer", 
            "Invisibility Cloak", "Flying Device", "Universal Translator", "Cleaning Clothes", 
            "Nanobot Treatment", "Holographic Displays", "Mind Control", "Smart Cities", 
            "Mood Devices", "Virtual Travel", "Artificial Photosynthesis", "AI Assistant", 
            "Space Colonies", "Healing Materials", "Autonomous Robots"
          ];
        const htmlPrint = [];
        info.forEach((i) => {
            newInfo.push(i.value);
        });
        document.getElementById('greeting').textContent = `Welcome to Bohora Productions ${newInfo[0]}.${newInfo[1]} ${newInfo[2]}`;
        if (!isNaN(newInfo[0])){
            alert('Do not put a number as a name.');
        }
        else {
            let userNum = prompt(`Hey ${newInfo[0]}, enter a number less than 126!`);
            userNum = parseInt(userNum);
            if (!isNaN(userNum) && userNum > 0 && userNum < 126) {
                for (let b = 1; b <= userNum; b++) {
                    let randomWord = invention[Math.floor(Math.random() * invention.length)];
                    let result = (b % 2 === 0) ? "The number is even" : "The number is odd";
                    htmlPrint.push(`<p>${b}. ${randomWord} ${result}</p>`);
                 }
                 main.innerHTML = htmlPrint.join('');
               } else {
                alert('Number cant be over 126')
               }
           }
        console.log(newInfo);
    });
});