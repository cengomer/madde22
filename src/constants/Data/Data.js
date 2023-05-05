import { EventImg1,EventImg2,EventImg3,EventImg4 } from "../../assets";

const Data  = [ 
    { 
        id:1,
        date: "7 Eylül Salı 21:15",
        type: "TİYATRO",
        image:EventImg1,
        title:"BKM Yaz Etkinlikleri: Zengin Mutfağı",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
        color:"B77CB8", 
        mobile:"1978 yılında ilk kez.."
   },
    { 
        id:2,
        date: "8 Eylül Çarşamba 21:15",
        type: "STAND-UP",
        image:EventImg2,
        title:"Yasemin Sakallıoğlu",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir... Detaylı Bilgi",
color:"F19653",
mobile:"1978 yılında ilk kez.."

    },
    { 
        id:3,
        date: "7 Eylül Salı 21:15",
        type: "SİNEMA",
        image:EventImg3,
        title:"Sinema Keyfi: Rifkin’s Festival",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
color:"F07266",
mobile:"1978 yılında ilk kez.."

    },
    { 
        id:4,
        date: "7 Eylül Salı 21:15",
        type: "KONSER",
        image:EventImg1,
        title:"BKM Yaz Etkinlikleri: Zengin Mutfağı",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
color:"9FAE5D",
mobile:"1978 yılında ilk kez.."

    },
    { 
        id:5,
        date: "8 Eylül Çarşamba 21:15",
        type: "STAND-UP",
        image:EventImg2,
        title:"Yasemin Sakallıoğlu",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir... Detaylı Bilgi",
color:"F19653",
mobile:"1978 yılında ilk kez.."

    },
    { 
        id:6,
        date: "7 Eylül Salı 21:15",
        type: "SİNEMA",
        image:EventImg4,
        title:"Sinema Keyfi: Rifkin’s Festival",
        place:"Maximum UNIQ Hall",
        description:"1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi",
        color:"F07266",
        mobile:"1978 yılında ilk kez.."

    },
];
Data.forEach(item => {
    item.isAdded = false;
  });

export default Data;