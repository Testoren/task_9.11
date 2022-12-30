const randmoth = Math.floor(Math.random() * 3); 
const personGenerator = {
    //Фамилии
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //Мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //Женские имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Ангелина",
            "id_4": "Виктория",
            "id_5": "Диана",
            "id_6": "Евангелина",
            "id_7": "Нонна",
            "id_8": "Ольга",
            "id_9": "Полина",
            "id_10": "Ксения"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Хакер",
            "id_2": "Инквизитор",
            "id_3": "Водитель от бога",
            "id_4": "Человек в законе",
            "id_5": "Гном строитель",
            "id_6": "Ситх",
            "id_7": "Джедай",
            "id_8": "Штурмавик",
            "id_9": "Играющий с огнем",
            "id_10": "Полицейский"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Целительница",
            "id_2": "Колдунья",
            "id_3": "Стюардесса",
            "id_4": "Портных дел мастерица",
            "id_5": "Кудесница",
            "id_6": "Транслейтница",
            "id_7": "Лучница",
            "id_8": "Друид",
            "id_9": "Кунаичи",
            "id_10": "Мать"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',



    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    //Рандомный пол
    randomGender: function() {

        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    //Преобразование
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //Рандомные имена
    randomFirstName: function() {
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        }
        else{
            return this.randomValue(this.firstNameFemaleJson); 
        }

    },

    
    //Рандомное отчество
    randomSecondName: function() {        

        male = this.randomValue(this.firstNameMaleJson);

        if(this.person.gender == this.GENDER_MALE){
           //Мужчины
            if(male.endsWith('а')){
                return male.slice(0, -1) + "ич";
            } 
                else {
                    if(male.endsWith('й')){
                        return male.slice(0, -1) + "евич";
                    } else {
                        return male + "ович"
                    }
            }
        }   else {   //Женщины
                if(male.endsWith('а')){
                    return male.slice(0, -1) + "ична";
                } else {
                    if(male.endsWith('й')){
                         return male.slice(0, -1) + "евна";
                    } else {
                         return male + "овна"
                    }
                }
            }

     },



    //Рандомная фамилия
    randomSurname: function() {

        if(this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + "а";
        }

    },

    //Рандомная профессия
    randomProfession: function() {

        if(this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }

    },

    randomMonth: function() { // Функция генерации месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },

    randomMonthEven: function() { // Функция генерации месяцев, в которых 31 день
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb: function() {
        let months = `февраль`
        return months
    },

    randomYear: function() { 
        return this.randomIntNumber(1970, 2003) + " г.р.";
    },

    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession();

        if(randmoth === 0) {
            this.person.month = this.randomMonth();
            this.person.day = this.randomIntNumber(1, 31);
        }   else if(randmoth === 1) {
            this.person.month = this.randomMonthEven();
            this.person.day = this.randomIntNumber(1, 30);
        }   else if(randmoth === 2) {
            this.person.month = this.randomMonthFeb();
            this.person.day = this.randomIntNumber(1, 28);
        };
        
        this.person.year = this.randomYear()    

        return this.person;
    }
};




