let lightColor = 'YnR'
let interval;
traficLight()
function traficLight() 
{
    document.getElementById('app').innerHTML = 
    `
    <div id="inner" class="mainBody">
   
    </div>
    <button onclick="greenLight()">green</button>
    <button onclick="yellowLight()">yellow</button>
    <button onclick="redLight()">red</button>
    <button onclick="yellowAndRedLight()">YnR</button>
    <button onclick="autoLight()">Auto</button>

    `
};

function greenLight() 
{
    document.getElementById('inner').innerHTML = 
    `
    <div id="gray">hei</div>
    <div id="gray">hei</div>
    <div id="green">hei</div>
    `
    lightColor = 'green'
}
function yellowLight() 
{
    document.getElementById('inner').innerHTML = 
    `
    <div id="gray">hei</div>
    <div id="yellow">hei</div>
    <div id="gray">hei</div>
    `
    lightColor = 'yellow'
}
function redLight() 
{
    document.getElementById('inner').innerHTML = 
    `
    <div id="red">hei</div>
    <div id="gray">hei</div>
    <div id="gray">hei</div>
    `
    lightColor = 'red'
}
function yellowAndRedLight() 
{
    document.getElementById('inner').innerHTML = 
    `
    <div id="red">hei</div>
    <div id="yellow">hei</div>
    <div id="gray">hei</div>
    `
    lightColor = 'YnR'
}

function autoLight() 
{
    clearInterval(interval)
    interval = setInterval(lightSwitcher, 1000)
}

function lightSwitcher() 
{
    if(lightColor == 'YnR')
        {
            greenLight();
        }
    else if(lightColor == 'green')
        {
            yellowLight();
        }
    else if(lightColor == 'yellow')
        {
            redLight();
        }
    else if(lightColor == 'red') 
        {
            yellowAndRedLight();
        }
}
