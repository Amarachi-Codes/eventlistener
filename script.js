const submit = document.getElementById('submit');
submit.style.backgroundColor = 'red';
submit.style.padding ='8px 20px'
submit.style.borderRadius = '10px'
submit.style.border = '1px solid white'
 document.body.style.backgroundColor = 'grey';
 document.body.style.textAlign = 'center';
 document.body.style.padding = '150px';
submit.addEventListener('click',()=>{
    alert('Thank you for banking with us')
})

const paragraph = document.querySelector('#paragraph');
const done = document.querySelector('#done');
done.addEventListener('click',()=>{
    if(paragraph.style.textDecoration === 'none'){
    paragraph.style.textDecoration = 'line-through';
    }else{
        paragraph.style.textDecoration = 'none'
    }
})