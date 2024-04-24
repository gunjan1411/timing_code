const {end_button,start_button} = require('../controllers/api.controller');



async function timing_diffrance(hours, minutes) {
    this.hoursfromstart = hours;
    this.minutesfromstart = minutes;
  
    try {
      console.log("hi from start button");
      return { hoursfromstart, minutesfromstart };
    } catch (err) {
      console.log(err);
    }
  }
  
  async function timing_diffrance2(hours, minutes) {
    this.hoursfromend = hours;
    this.minutesfromend = minutes;
  
    try {
      console.log("hi from end button");
      return { hoursfromend, minutesfromend };
    } catch (error) {
      console.log(error);
    }
  }
  
async function calculateDifference(hoursfromstart1,minutesfromstart1,hoursfromend,minutesfromend){

     const hours=hoursfromstart1;
     const minutes=hoursfromend;

    // timing_diffrance(hours, minutes) 
    const {hoursfromstart,minutesfromstart} = timing_diffrance(hours, minutes) 
    console.log(hoursfromstart);
    console.log(minutesfromstart);
    console.log(hoursfromend); 
    console.log(minutesfromend);
}


module.exports={
    timing_diffrance,timing_diffrance2,calculateDifference
}