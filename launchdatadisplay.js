//a class for setting up the data from dataloader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_prssure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_prssure = bmpSensor_prssure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX =magneticX;
        this.magneticY =magneticY;
        this.magneticZ =magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//the getData function extracts the data from the dataloader.js file
function getData(){
        var loadedData = loadData();
    return loadedData;
}

//function to setup data in the table
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay(){
    console.log("updateDisplay() started");
    //record and diplay time data
    theTime = new Date();
    
    //new if then statement style cond ? ifTrue : ifFalse
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) 
    +":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //update the one screen time
    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) 
         +":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
        
    //update table
    var timeRead = data[index].time_seconds;

    if(timeRead >= 10){
    document.getElementById("datatable").rows["seconds"].innerHTML =
        dataRow("Time Elapsed",data[index].time_seconds,"seconds");
    document.getElementById("datatable").rows["latitude"].innerHTML =
        dataRow("latitude",data[index].latitude,"");  
    document.getElementById("datatable").rows["longitude"].innerHTML =
        dataRow("longitude",data[index].longitude,"");
    document.getElementById("datatable").rows["gps_altitude"].innerHTML =
        dataRow("gps_altitude",data[index].gps_altitude,"");
    document.getElementById("datatable").rows["bmp_altitude"].innerHTML =
        dataRow("bmp_altitude",data[index].bmpSensor_altitude,"");
    document.getElementById("datatable").rows["bmp_pressure"].innerHTML =
        dataRow("bmp_pressure",data[index].bmpSensor_prssure,"");
    document.getElementById("datatable").rows["bmp_temperature"].innerHTML =
        dataRow("bmp_temperature",data[index].bmpSensor_temp,"");
    document.getElementById("datatable").rows["dig_temperature"].innerHTML =
        dataRow("dig_temperature",data[index].digSensor_temp,"");
    document.getElementById("datatable").rows["css_temperature"].innerHTML =
        dataRow("css_temperature",data[index].cssSensor_temp,"");
    document.getElementById("datatable").rows["css_eCO2"].innerHTML =
        dataRow("css_eCO2",data[index].cssSensor_eCO2,"");
    document.getElementById("datatable").rows["css_TVOC"].innerHTML =
        dataRow("css_TVOC",data[index].cssSensor_TVOC,"");
    document.getElementById("datatable").rows["uv"].innerHTML =
        dataRow("uv",data[index].UV,"");
    document.getElementById("datatable").rows["accelx"].innerHTML =
        dataRow("accelx",data[index].accelX,"");
    document.getElementById("datatable").rows["accely"].innerHTML =
        dataRow("accely",data[index].accelY,"");
    document.getElementById("datatable").rows["accelz"].innerHTML =
        dataRow("accelz",data[index].accelZ,"");
    document.getElementById("datatable").rows["magneticx"].innerHTML =
        dataRow("magneticx",data[index].magneticX,"");
    document.getElementById("datatable").rows["magneticy"].innerHTML =
        dataRow("magneticy",data[index].magneticY,"");
    document.getElementById("datatable").rows["magneticz"].innerHTML =
        dataRow("magneticz",data[index].magneticZ,"");
    document.getElementById("datatable").rows["gyrox"].innerHTML =
        dataRow("gyrox",data[index].gyroX,"");
    document.getElementById("datatable").rows["gyroy"].innerHTML =
        dataRow("gyroy",data[index].gyroY,"");
    document.getElementById("datatable").rows["gyroz"].innerHTML =
        dataRow("gyroz",data[index].gyroZ,"");

    }

    if(index < 500){
        index++;
      }  else{
        index = 0;
      }
    }


