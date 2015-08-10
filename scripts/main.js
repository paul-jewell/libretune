// "title": "LPTune",
// "credits": "Craig Nuttall, Jim Allen Thibodaux, Mike Walters, David Willis, Paolo Buongarzone"

// Input Variables from html form:
// PitchUOV, RollUOV, ESCType, Style, YawStyle
// Output variables:
// PitchKp, PitchKi, PitchPd, RollKp, RollKi, RollKd, YawKp, YawKi, YawKd

// Intermediate Lookup values:
// Roll/Pitch: RPPfactor, RPIfactor, RPDfactor
// Yaw: YPfactor, YIfactor, YDfactor
// ESC: ESCfactor

// Constant arrays
var RPPfactor = [0.61, 0.62, 0.63, 0.6325];
var RPIfactor = [2.5, 3, 3.5, 4];
var PRDfactor = [0.0135, 0.0135, 0.0135, 0.0135];
var YPfactor = [1,1.5,2,2.5];
var YIfactor = [1.9,1.9,1.9,1.9];
var YDfactor = [0.0085, 0.0085, 0.0085, 0.0085];
var ESCfactor = [0.8, 0.9, 0.92, 1.0];

// For testing purposes...
var PitchUOV = 1;
var RollUOV = 1;

function calculate() {

    document.getElementById("PitchKp").innerHTML = PitchUOV * RPPfactor[Style] * ESCfactor[ESCtype];
    PitchKi = PitchUOV * RPIfactor[Style] * ESCfactor[ESCtype];
    PitchKd = PitchUOV * RPDfactor[Style] * ESCfactor[ESCtype];

    RollKp = RollUOV * RPPfactor[Style] * ESCfactor[ESCtype];
    RollKi = RollUOV * RPIfactor[Style] * ESCfactor[ESCtype];
    RollKd = RollUOV * RPDfactor[Style] * ESCfactor[ESCtype];

    RollKp = (PitchUOV + RollUOV)/2 * YPfactor[YawStyle];
    RollKi = (PitchUOV + RollUOV)/2 * YIfactor[YawStyle];
    RollKd = (PitchUOV + RollUOV)/2 * YDfactor[YawStyle];
    
}
