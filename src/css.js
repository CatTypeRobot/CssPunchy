const string = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition : all 0.3s;
}

*::before {
    box-sizing: border-box;
}

*::after {
    box-sizing: border-box;
}

.punchy {
    background-color: #0077b6;
    height: 55vh;
}

.container {
    position: relative;
    height: 100%;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow: hidden;
}

.head,
.topHead,
.leftEar,
.rightEar,
.innerEar,
.leftEye,
.rightEye,
.eyeball,
.eyelid,
.whisker1,
.whisker2,
.whisker3,
.mouth,
.midMouth {
    position: absolute;
}

.head {
    top: 35%;
    left: 25%;
    border-radius: 50% 50% 40% 40%;
    width: 50%;
    height: 50%;
    background: #fff;
}

.topHead {
    width: 100%;
    height: 50%;
    border-radius: 250px 250px 5px 5px;
    background-color: #48486c;
    z-index: 2;
}

.leftEar {
    top: -50%;
    left: -8%;
    width: 75%;
    height: 75%;
    background-color: #48486c;
    clip-path: polygon(50% 0%, 20% 100%, 80% 100%);
    z-index: 1;
}

.rightEar {
    top: -50%;
    right: -8%;
    width: 75%;
    height: 75%;
    clip-path: polygon(50% 0%, 20% 100%, 80% 100%);
    background-color: #48486c;
    z-index: 1;
}

.innerEar {
    left: 25%;
    top: 30%;
    width: 50%;
    height: 50%;
    clip-path: polygon(50% 0%, 20% 100%, 80% 100%);
    background: #ff928d;
}

.leftEye,
.rightEye {
    top: 70%;
    height: 75px;
    width: 70px;
    border-radius: 50%;
    background: #fffd42;
}

.leftEye {
    left: 15%;
}

.rightEye {
    right: 15%;
}

.eyeball {
    top: 15%;
    left: 15%;
    height: 55px;
    width: 50px;
    border-radius: 50px;
    background: #000;
}

.eyelid {
    width: 100%;
    height: 50%;
    border-radius: 250px 250px 10px 10px;
    z-index: 2;
    background: #7d88e4;
}

.whisker1 {
    top: 70%;
    height: 10px;
    width: 100%;
}

.whisker1::before,
.whisker1::after {
    content: '';
    position: absolute;
    width: 58px;
    height: 10px;
    background: #000;
    border-radius: 40%;
}

.whisker1::before {
    left: 5%;
}

.whisker1::after {
    right: 5%;
}

.whisker2 {
    top: 78%;
    height: 10px;
    width: 100%;
}

.whisker2::before,
.whisker2::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 10px;
    background: #000;
    border-radius: 40%;
}

.whisker2::before {
    left: 7%;
    transform: rotate(-15deg);
}

.whisker2::after {
    right: 7%;
    transform: rotate(15deg);
}

.whisker3 {
    top: 85%;
    height: 10px;
    width: 100%;
}

.whisker3::before,
.whisker3::after {
    content: '';
    position: absolute;
    width: 38px;
    height: 10px;
    background: #000;
    border-radius: 40%;
}

.whisker3::before {
    left: 15%;
    transform: rotate(-30deg);
}

.whisker3::after {
    right: 15%;
    transform: rotate(30deg);
}

.mouth {
    top: 60%;
    left: 7%;
    width: 210px;
    height: 100px;
}

.mouth::before,
.mouth::after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 15%;
    width: 18px;
    height: 40px;
    border-top: 8px solid #000;
    border-left: 10px solid #000;
    border-radius: 68% 32% 39% 61% / 55% 42% 58% 45%;
}

.mouth::before {
    left: 32%;
    transform: rotate(-115deg);
}

.mouth::after {
    right: 32%;
    transform: rotate(115deg) scaleX(-1);
}

.midMouth {
    width: 20px;
    height: 10px;
    border-radius: 49% 51% 42% 58% / 100% 100% 0 0;
    border-top: 10px solid #000;
    top: 25%;
    left: 45%;
}
`

export default string