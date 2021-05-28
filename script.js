const euro=document.getElementById('euro');
const pkdata=document.getElementById('pkr');
const usddata=document.getElementById('usd');
const SRdata=document.getElementById('sr');

euro.addEventListener('input', Eurotoall);



function Eurotoall(){
    const eu= parseInt(euro.value);
    const pr= 189.287*eu;
    const ud= eu*1.2253;
    const slr=eu*242.261;
    pkdata.value=pr;
    usddata.value=ud;
    SRdata.value=slr;
};
usddata.addEventListener('input', usdtoall);
function usdtoall(){
    const usa= parseInt(usddata.value);
    const pr= 155.52*usa;
    const eu= usa*0.82;
    const slr=usa*198.84;
    pkdata.value=pr;
    euro.value=eu;
    SRdata.value=slr;
};
pkdata.addEventListener('input',pktoall);
function pktoall(){
    const pr= parseInt(pkdata.value);
    const eu= pr*0.0053;
    const ud= pr*0.0064;
    const slr=pr*1.28;
    euro.value=eu;
    usddata.value=ud;
    SRdata.value=slr;
};
SRdata.addEventListener('input',slrtoall);
function slrtoall(){
    const slr= parseInt(SRdata.value);
    const pr= 0.78*slr;
    const ud= slr*0.0050;
    const eu=slr*0.0041;
    pkr.value=pr;
    usd.value=ud;
    euro.value=eu;
};
