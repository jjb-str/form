isInvalid = false;

function checkPass(p1, p2) {
    insertPoint = document.querySelector('#password');
    errorText = document.createElement('p');
    
    if (p1.value === p2.value) {
        if (isInvalid) {
            p1.style.border = '2px solid green';
            p2.style.border = '2px solid green';
            insertPoint.removeChild(document.querySelector('.error'));
            isInvalid = false;
        }

        console.log('Valid Pass!');
    } else if (!isInvalid) {
        p1.style.border = '2px solid red';
        p2.style.border = '2px solid red';
        errorText.classList.add('error');
        errorText.textContent = '*Passwords do not match!';
        insertPoint.appendChild(errorText);
        isInvalid = true;
    }
}


submitBtn = document.querySelector('.sub').addEventListener('click', function() {
    p1 = document.querySelector('.p1');
    p2 = document.querySelector('.p2');
    checkPass(p1, p2);
})