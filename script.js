// $(document).ready(function(){
//     $("#revenue").keyup(function(){
//         $(this.maskNumber({integer: true, thousands:"."}))
//     })
// })
function hitung(){
    var revenue =(document.getElementById("revenue").value);
    var vlr =(document.getElementById("vlr").value);
    var prb = parseInt((document.getElementById("prb").value))/100;
    var ms = parseInt((document.getElementById("ms").value))/100;
    var populasi = parseInt((document.getElementById("populasi").value));
    var outlet = parseInt((document.getElementById("outlet").value));
    var arpu = revenue/vlr;
    var maks_vlr = ((vlr/ prb)*(85/100));
    var addVLR = maks_vlr - vlr;
    var addMS = populasi * ms;
    var addPopulasi = addMS - vlr;
    var target_vlr_x_arpu = maks_vlr*arpu;
    var gap_vlr_x_arpu = addVLR*arpu;
    var target_outlet_to_eksisting_rev = revenue/outlet;
    var target_outlet_to_gap_rev = gap_vlr_x_arpu/outlet;
    document.getElementById('arpu').value =Math.round(arpu);
    document.getElementById('addVlr').innerHTML = Math.round(addVLR);
    document.getElementById('addMs').innerHTML = Math.round(addMS);
    document.getElementById('addPopulasi').innerHTML = Math.round(addPopulasi)
    document.getElementById('target').innerHTML = Math.round(target_vlr_x_arpu)
    document.getElementById('gap').innerHTML = Math.round(gap_vlr_x_arpu)
    document.getElementById('rev_outlet').innerHTML = Math.round(target_outlet_to_eksisting_rev)
    document.getElementById('tar_rev_outlet').innerHTML = Math.round(target_outlet_to_gap_rev)
    
    if (prb > (85/100)) {
        document.getElementById("alert").innerHTML = "PRB sudah melebihi 85%. Harus melakukan penambahan ARPU"
    }else{
        document.getElementById("alert").innerHTML = "PRB kurang 85%. Harus melakukan penambahan VLR"
    }

}