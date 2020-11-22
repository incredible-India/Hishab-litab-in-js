 let addin =document.getElementById('kitab')
                                                                                         
 let NumberOfClick=0;
                                     
                                      
           
 let addbutton=document.getElementById('addbutton')

 addbutton.addEventListener('click',()=>{

     ++NumberOfClick;
 let doc=document.getElementById('ismeadd')
     let Addmore=`   <div id="isme${NumberOfClick+1}" style="display: flex; justify-content: center; align-items:  center;">
     <div class="input-group" style="width: 600px; margin:10px;">
         <div class="input-group-prepend" >
            <span class="input-group-text"> Product Name</span>
        </div>
        <input type="text" aria-label="First name" class="form-control" >
       
      </div>
    
    <div class="input-group" style="width: 300px;">
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
    <div class="input-group-append">
      <span class="input-group-text">Rs</span>
    
    <button class="btn btn-danger removebtn" id="${NumberOfClick+1}">-</button>
    </div>
    </div>
    </div>
    
    `
    
    doc.innerHTML +=Addmore


for(o of  document.getElementsByClassName('removebtn') )
{
      o.addEventListener('click',(e)=>{
        console.log(document.getElementById(`isme${e.target.id}`));
      document.getElementById(`isme${e.target.id}`).style.display="none"
           })
        
        }
})
 
 

