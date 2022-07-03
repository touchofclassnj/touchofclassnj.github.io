b1 = document.getElementById('b1')
b2 = document.getElementById('b2')
b3 = document.getElementById('b3')



b1.addEventListener('mousein', e =>
    {
        b1.style.backgroundColor = 'red'
    }
)

b1.addEventListener('mouseout', e =>
    {
        b1.style.backgroundColor = 'antiquewhite'
    }
)

