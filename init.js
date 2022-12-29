
/*    window.onload = function()
    {
        const initPerson = personGenerator.getPerson();
        //Имя
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        //Отчество
        document.getElementById('secondNameOutput').innerText = initPerson.secondName;
        //Фамилия
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        //Пол
        document.getElementById('genderOutput').innerText = initPerson.gender;
        //Профессия
        document.getElementById('professionOutput').innerText = initPerson.profession;

        //Месяц
        document.getElementById('monthOutput').innerText = initPerson.month;
        document.getElementById('dayOutput').innerText = initPerson.day;

        //Год
        document.getElementById('YearOutput').innerText = initPerson.year;    
    };
*/

document.querySelector('.surName').classList.remove('hidden');
document.querySelector('.firstName').classList.remove('hidden');
document.querySelector('.secondName').classList.remove('hidden');

document.getElementById('generation').addEventListener('click', function(){
    const initPerson = personGenerator.getPerson();
    document.querySelector('.surName').classList.remove('hidden');
    document.querySelector('.firstName').classList.remove('hidden');
    document.querySelector('.secondName').classList.remove('hidden');
    //Имя
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    //Отчество
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    //Фамилия
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    //Пол
    document.getElementById('genderOutput').innerText = initPerson.gender;
    //Профессия
    document.getElementById('professionOutput').innerText = initPerson.profession;
    //Месяц
    document.getElementById('monthOutput').innerText = initPerson.month;
    document.getElementById('dayOutput').innerText = initPerson.day;
    //Год
    document.getElementById('YearOutput').innerText = initPerson.year;  
})

document.getElementById('clear').addEventListener('click', function(){
    
    
    document.querySelector('.surName').classList.add('hidden');
    document.querySelector('.firstName').classList.add('hidden');
    document.querySelector('.secondName').classList.add('hidden');
    //Фамилия       
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    //Имя
    document.getElementById('firstNameOutput').innerText = 'Имя';
    //Отчество
    document.getElementById('secondNameOutput').innerText = 'Отчество';
    //Пол
    document.getElementById('genderOutput').innerText = 'Биологическая этничность, ';
    //День
    document.getElementById('dayOutput').innerText = 'День, ';
    //Месяц
    document.getElementById('monthOutput').innerText = 'Месяц, ';
    //Год
    document.getElementById('YearOutput').innerText = 'Год, ';  
    //Профессия
    document.getElementById('professionOutput').innerText = 'Кто ты в этом мире? ';

})