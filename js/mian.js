
let btn = document.getElementById('btn');
let btnHombre = document.getElementById('hombre');
let riñon =  document.getElementById('riñon')
let dos = document.getElementById('dos');



btn.addEventListener('click', () => {
    let scr = parseFloat(document.getElementById('scr').value);
    let age = parseInt(document.getElementById('edad').value);
    let urea = parseFloat(document.getElementById('urea').value);
    let albumin = parseFloat(document.getElementById('albumin').value);
    let formula = 6.3106 - 1.7656 * Math.sqrt(scr) - 0.0055 * age - 0.0656 * urea + 0.060 * albumin;
    
    
     

     
   
    Swal.fire({
        
        title: (formula),
        
      })   




                                                                                                                                                                                                                                     
})

btnHombre.addEventListener('click', () => {
    let scr = parseFloat(document.getElementById('scr').value);
    let age = parseInt(document.getElementById('edad').value);
    let urea = parseFloat(document.getElementById('urea').value);
    let albumin = parseFloat(document.getElementById('albumin').value);
    let formulaHombre = 6.3106 - 1.7656 * Math.sqrt(scr) - 0.0055 * age - 0.0656 * urea + 0.060 * albumin + 0.244;
    
    
     

     
   
    Swal.fire({
        
        title: (formulaHombre),
        
      })                                                                                                                                                                           
})

riñon.addEventListener('click', () => {
    let scr = parseFloat(document.getElementById('scr').value);
    let age = parseInt(document.getElementById('edad').value);
    let urea = parseFloat(document.getElementById('urea').value);
    let albumin = parseFloat(document.getElementById('albumin').value);
    let formulaUnRiñon = 6.3106 - 1.7656 * Math.sqrt(scr) - 0.0055 * age - 0.0656 * urea + 0.060 * albumin - 0.2052;
    
    
     

     
   
    Swal.fire({
        
        title: (formulaUnRiñon),
        
      })                                                                                                                                                                             
})
dos.addEventListener('click', () => {
    let scr = parseFloat(document.getElementById('scr').value);
    let age = parseInt(document.getElementById('edad').value);
    let urea = parseFloat(document.getElementById('urea').value);
    let albumin = parseFloat(document.getElementById('albumin').value);
    let dosP = 6.3106 - 1.7656 * Math.sqrt(scr) - 0.0055 * age - 0.0656 * urea + 0.060 * albumin + 0.244 - 0.2052;
    
    
     

     
   
    Swal.fire({
        
        title: (dosP),
        
      })                                                                                                                                                                        
})

