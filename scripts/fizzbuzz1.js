document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name-information').addEventListener('submit',(event) => {
        event.preventDefault();
        const info = document.querySelectorAll('#name-information input');
        const ol = document.getElementById('fizz-list');
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
        document.getElementById('greeting').textContent = `Welcome to Bohora Productions ${newInfo[0]} .${newInfo[1]} ${newInfo[2]}`;
        if (!isNaN(newInfo[0])){
            alert('Do not put a number as a name.');
        }
        else {
                for (let b = 1; b <= 140; b++) {
                    let randomWord = invention[Math.floor(Math.random() * invention.length)];
                    let result = (b % 2 === 0) ? "The number is even" : "The number is odd";
                    let li = document.createElement('li');
                    if (b % 15 === 0){
                        li.textContent = `Amazing Product!`;
                    } else if (b % 5 ===0) {
                        li.textContent = `Amazing!`;
                    } else if (b% 3 === 0) {
                        li.textContent = `Product!`;
                    }
                    else {
                        li.textContent = ` ${randomWord}`;
                    }

                    
                    ol.appendChild(li);
                    console.log(`Appended: ${b}. ${randomWord} ${result}`);
                 }
           }
    });
});