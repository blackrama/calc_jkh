$(document).ready(function(){
    $("input#lgota").change(function(){
        if ($(this).prop('checked')) {
            $('.calc_lgota').fadeIn(300); 
          } else {
            $('.calc_lgota').fadeOut().show();
            
          }
        });
    
    
    function Regions(region,one_people,able_people,retiree_people,children_people){
        this.region = region;
        this.one_people = one_people;
        this.able_people = able_people;
        this.retiree_people = retiree_people;
        this.children_people = children_people;

    };
    var $a = 3;
    var $regions_array = new Array(
    adygeya = new Regions('Адыгея',9232,10342,8876,9654),    
    altay = new Regions('Алтай',10560,11432,9871,10432),
    altay_reg = new Regions('Алтайский край',9490,9906,8152,9811),
    amurskaya_obl = new Regions('Амурская область',10980,11661,8924,11400),
    arhangelskaya_obl = new Regions('Архангельская область',12090,13149,10056,11917),
    astrahanskaya_obl = new Regions('Астраханская область',9622,10126,7757,10461),
    bashkortostan = new Regions('Башкортостан',9014,9552,7315,9182),
    belgorodskaya_obl = new Regions('Белгородская область',9467,9783,8629,8963),
    braynskaya_obl = new Regions('Брянская область',9880,10593,8202,9720),
    buratiay = new Regions('Бурятия',10823,11027,10239,10589),
    vladimirskaya_obl = new Regions('Владимирская область',10872,11078,10028,10492),
    volgogradskaya_obl =new Regions('Волгоградская область',9318,9973,7556,9569),
    vologodskaya_obl = new Regions('Вологодская область',10382,10489,9287,9678),
    voronejskaya_obl = new Regions('Воронежская область',8966,9239,8928,9173),
    evrejskaya_avt_obl = new Regions('Еврейская автономная область',12825,13588,10358,13411),
    dagestan = new Regions('Дагестан',9301,9552,7345,9488),
    zabaykalskiy_reg = new Regions('Забайкальский край',11290,11670,10289,10349),
    ivanonskaya_obl = new Regions('Ивановская область',10102,10966,8405,10142),
    ingushetiya = new Regions('Ингушетия',9678,10384,9382,10023),
    irkutskaya_obl = new Regions('Иркутская область',11235,11890,10457,10976),
    kabardion_balkariya = new Regions('Кабардино-Балкария',9800,10786,9342,9980),
    kaliningradskaya_obl = new Regions('Калининградская область',10980,11537,10028,10683),
    kalmykiya = new Regions('Калмыкия',9000,9345,8674,9038),
    kalujskaya_obl = new Regions('Калужская область',10482,11289,8689,10292),
    kamchtskiy_reg = new Regions('Камчатский край',19555,20618,15587,21054),
    karachaevo_cherkesiya = new Regions('Карачаево-Черкессия',9335,9836,7528,9608),
    kareliya = new Regions('Карелия',13030,14186,10862,12330),
    kemerovskaya_obl = new Regions('Кемеровская область',9476,10031,7625,9928),
    kirovskaya_obl = new Regions('Кировская область',9675,10314,7881,10008),
    komi = new Regions('Коми',12948,13892,10582,13025),
    krasnoyarskiy_reg = new Regions('Красноярский край',11914,12605,9288,12490),
    kostromskaya_obl = new Regions('Костромская область',10900,11560,10348,10679),
    krasnodarskiy_reg = new Regions('Краснодарский край',10238,11059,8455,9890),
    krime = new Regions('Крым',10900,11348,10389,10657),
    kurganskaya_obl = new  Regions('Курганская область',10349,10789,9900,10478),
    kurskaya_obl = new Regions('Курская область',9280,9954,7707,9338),
    leningradskaya_obl = new Regions('Ленинградская область',10450,11000,10200,10600),
    lipeckaya_obl = new Regions('Липецкая область',8734,9433,7326,8855),
    magadanskaya_obl = new Regions('Магаданская область',18146,19085,14275,19519),
    mariyel = new Regions('Марий Эл',9780,9945,9130,9439),
    mordoviya = new Regions('Мордовия',9340,9780,9034,9450),
    moskov = new Regions('Москва',16463,18781,11609,14329),
    moskov_obl = new Regions('Московская область',12229,13528,9137,12057),
    murmanskaya_obl = new Regions('Мурманская область',14890,15673,12346,13948),
    neneckiy_ao = new Regions('Ненецкий АО',20460,21527,16690,21427),
    nijegorodskaya_obl = new Regions('Нижегородская область',10900,11348,10563,11067),
    novgorodskaya_obl = new Regions('Новгородская область',10652,11568,8822,10589),
    novosibirskaya_obl = new Regions('Новосибирская область',10843,11527,8723,11145),
    omskaya_obl = new Regions('Омская область',9250,9767,7411,9641),
    orenburgskaya_obl = new Regions('Оренбургская область',8816,9357,7232,9259),
    orlovskaya_obl = new Regions('Орловская область',10897,11235,10456,10980),
    penzenskaya_obl = new Regions('Пензенская область',9783,10020,9867,9377),
    permskiy_reg = new Regions('Пермский край',10098,10804,8279,10289),
    primorskiy_reg = new Regions('Приморский край',12537,13218,10066,13699),
    pskovskaya_obl = new Regions('Псковская область',10651,11620,8865,10635),
    rostovskaya_obl = new Regions('Ростовская область',9671,10285,7841,10117),
    ryazanskaya_obl = new Regions('Рязанская область',9821,10464,8139,9819),
    samarskaya_obl = new Regions('Самарская область',10900,11673,10236,10673),
    sankt_peterburg = new Regions('Санкт-Петербург',11007,12063,8944,10741),
    saratovskaya_obl = new Regions('Саратовская область',9637,10345,9231,10029),
    saha_yakutiya = new Regions('Саха (Якутия)',16463,17457,13226,16906),
    sahalinskaya_obl = new Regions('Сахалинская область',15786,16678,12457,13349),
    sverdlovskaya_obl = new Regions('Свердловская область',11345,11859,11200,11568),
    sevastopol = new Regions('Севастополь',10980,11235,10569,11028),
    severnaya_osetiya_alaniya = new Regions('Северная Осетия (Алания)',9767,10034,9034,9653),
    smolenskaya_obl = new Regions('Смоленская область',10364,11134,8578,10200),
    stavropolskiy_reg = new Regions('Ставропольский край',9089,9673,8953,9622),
    tambovskaya_obl = new Regions('Тамбовская область',8861,9629,7425,8807),
    tatarstan = new Regions('Татарстан',9349,9673,8990,9273),
    tverskaya_obl = new Regions('Тверская область',10410,11219,8634,10860),
    tomskaya_obl = new Regions('Томская область',11179,11768,8920,11582),
    tulskaya_obl = new Regions('Тульская область',9915,10627,8508,9760),
    tyva = new Regions('Тыва',10102,10408,7968,10655),
    tyumenskaya_obl = new Regions('Тюменская область',10887,11467,8708,11139),
    udmurtiya = new Regions('Удмуртия',9150,9675,7423,9302),
    ulyanovskaya_obl = new Regions('Ульяновская область',9682,10370,7937,9992),
    habarovskiy_reg = new Regions('Хабаровский край',15089,16756,13456,14672),
    hakasiya = new Regions('Хакасия',10897,11238,10782,11023),
    hanty_mantiyskiy = new Regions('Ханты-Мансийский АО',14512,15646,11893,14464),
    chelyabinskaya_obl = new Regions('Челябинская область',9592,10269,7918,9939),
    chechenskaya_reg = new Regions('Чеченская Республика',9664,10090,9034,9563),
    chuvashskaya_reg = new Regions('Чувашская Республика',9560,10090,9080,9560),
    chukotskiy_ao = new Regions('Чукотский АО',21441,21960,16386,22472),
    yamalo_neneckiy_ao = new Regions('Ямало-Ненецкий АО',20670,22789,17897,18675),
    yaroslayvskaya_obl = new Regions('Ярославская область',9695,10631,7869,9783)
    );


        


$('#hacs').on('click', function(){
    var user_region = $regions_array[$('#regions').val()];
    var count_memebers = $('#members').val();
    var count_able = $('#able').val();
    var count_retiree = $('#retiree').val();
    var count_children = $('#children').val();
    var family_income= $('#income').val();
    var comun_lgota = $('#comun_lgota').val();
    var comun_not_lgota = $('#comun_not_lgota').val();
    var projitochnuy_minimum = (user_region.able_people*count_able+user_region.retiree_people*count_retiree+user_region.children_people*count_children)/count_memebers;
    if(isNaN(projitochnuy_minimum)){
        projitochnuy_minimum = 0;
    }
    if( $("input#lgota").prop('checked') && comun_lgota!=0 && comun_lgota!=0){
        var koefficient_skidka = comun_lgota/comun_not_lgota;
    }else {
        var koefficient_skidka = 0;
    }
   
    var average_familu_income = family_income/count_memebers;
    if(isNaN(average_familu_income)){
        average_familu_income = 0;
    }
   
    var popravochnuj_koefficient = average_familu_income/projitochnuy_minimum;
    if(isNaN(popravochnuj_koefficient)){
        popravochnuj_koefficient = 0;
    }
  
    var ssjku = 3326.45;
    var mddr = 0.14;
    var subsidia = 0;
    if(average_familu_income>=projitochnuy_minimum) {
        subsidia = ssjku*count_memebers-0.14*family_income;
      
    } else {
        if(koefficient_skidka>0){
            subsidia = ssjku*count_memebers-0.14*family_income*koefficient_skidka;
     
            
        } else {
            subsidia = ssjku*count_memebers-0.14*family_income*popravochnuj_koefficient;
            
        }
        
    }
    var message ="";
    if(isNaN(subsidia)){
        subsidia=0;
    }
    if(subsidia<=0) {
        message = 'Субсидия не была насчитана';
    } else {
        message = 'Ваша субсидия '+ subsidia.toFixed(2) +" руб.";
    }
    var result_message = "<p>Ваш прожиточный минимум "+projitochnuy_minimum+"</p>"+"<p>Ваша скидка "+koefficient_skidka+"</p>"+"<p>среднедушевой доход семьи "+average_familu_income+"</p>"+"<p>поправочный коефициент "+popravochnuj_koefficient.toFixed(2)+"</p>"+"<p>"+message+"</p>";
    $('.calc-result').html(result_message);
});

})