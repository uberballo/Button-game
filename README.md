# Button game

A game where you press the button and with luck, you may win some points. Each press costs one point and every 10th, 100th and 500th wins you points. The challenge is that you never know whats the current count, thus you need some luck to win.  


## How to play  
You start by typing your own username and you receive complimentary 20 points. Then press the button. If you lose, you may start again with 20 points. Your score is saved on your user.  

## How to install  
### Clone the repository  
Download the repository by typing:  
`git clone https://github.com/uberballo/Button-game.git`  

### Install the required dependencies  
Move to the correct folder and type the following:  
`npm install  
npm run build`  
Thus you install all the required dependencies and build the project.  

### Create a .env file  
The project uses MongoDB and requires it to run. Create a .env file add the following:  
`MONGODB_URI = <link to mongoDB>
PORT = 3003`  
The port is optional.  

### Start the program  
You may start the program by typing: 
`npm start`  
and on the terminal you will see where the program is running. In this case it would be `http://localhost:3003`  

## Testing  
