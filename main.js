var en = {
    'header-lang': 'English classes',
    'header2-lang': 'Language will change your life!',
    'btn-lang': 'Register',
    'application': 'application',
    'about':'Hi, my name is Joshua, my wife and I decided to open English courses to help people with this significant language!' +
        '                so follow the link and register.' +
        '                The places are limited.',
    'geo':'We are in Orekhovo-Zuyevo not far from the city center',
    'eng-age': 'We have 17 years of experience in teaching English.',
    'ps':'We ready and want to help people to know language better!',
    'phrase': 'You can never understand one language until you understand at least two!"'
};
var ru = {
    'header-lang': 'Уроки Английского',
    'header2-lang': 'Язык изменит вашу жизнь!',
    'btn-lang': 'Подать заявление',
    'application': 'Заявление',
    'about':'Привет, меня зовут Джошуа, мы с женой решили открыть курсы английского языка, в Орехово- Зуево, чтобы помочь людям с столь значительным в нашей жизни языком!\n' +
        'Скорее переходите и регистрируйтесь, так как количество мест ограничено!',
    'geo':'Мы находимся в Орехово-Зуево недалеко от центра города',
    'eng-age': 'Мы уже обучаем Английскому более чем 17 лет.',
    'ps':'Мы готовы и хотим помочь людям лучше знать язык!',
    'phrase': 'Вы никогда не сможете понять один язык, пока не поймете хотя бы два!"'
};


function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
        objKey = Object.getOwnPropertyNames(lan)[i];
        document.getElementById(objKey).innerText = func(objKey);
    }

    function func(a) {
        for (key in lan) {
            if (key == a) {
                return (lan[key]);
            }
        }
    }
}



$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
});
