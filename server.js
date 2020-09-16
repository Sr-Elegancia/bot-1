

const Discord = require('discord.js');
const client = new Discord.Client()
const config = require("./config.json");

let prefix = config.PREFIX;
let prefix2 = config.PREFIX2;







client.on('guildMemberAdd', member => {
  setTimeout(()=> {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return; 
    
    if(member.id == '662420316156329985') return channel.send(`bienbenida a Kc team, El lugar en el que la unica limitante es tu imaginación, ven... y disfruta del viaje, se vienvenida ${member}`);
    
  // Send the message, mentioning the member
  channel.send(`bienbenido a Keveen City Team, El lugar en el que la unica limitante es tu imaginación, ven... y disfruta del viaje, se vienvenido ${member}`);
},1000)
  });


client.on('guildMemberRemove', memberR => {
  setTimeout(()=> {
  // Send the message to a designated channel on a server:
  const channel = memberR.guild.channels.find(ch => ch.nickname === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`adios ${memberR}`);
},1000)
  });





client.on('ready', () => {
     console.log(`¿Bromeas?, yo siempre estoy listo.`);
  
  
  
  
  setInterval(function () {
var estados = ["Marvel vs Capcom 2","Pacman"]
 

  client.user.setPresence( {
      status: "offline",
      game: {
          name: estados[Math.floor(Math.random() * estados.length)],
          type: "PLAYING",
          
      
        
      
}
  } );
  }, 43200000);
});




client.on('message', message => {

    console.log("Info...")
    console.log("{")
    console.log("Name:"+message.author.username)
    console.log("Nickname:"+message.member.nickname)
    console.log("Bot:"+message.author.bot)
    console.log("ID:"+message.author.id)
    console.log("Discriminator:"+message.author.discriminator)
    console.log("Channel:"+message.channel.name)
    console.log("Message:"+message.content)
    console.log("}")

});


client.on("message", (message) => {
  
//prefixes es la variable matriz de los prefix
const prefixes = ['Director-','director-','D-', 'd-', 'Dire-','dire-', 'D_', 'd_', 'D*', 'd*', 'D!', 'd!','d+','D+'];


let prefix = false;

for(const thisPrefix of prefixes) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
}

 
  
  
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

if (message.content.match(RegMention)) { //Creamos la condicional
    message.channel.send(`que quieres?`)
}
  
  
    if (message.author.bot) return;
  
  
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 
  

  if(command === 'setpresence'){
 let razon = args.slice(0).join(' ');
if(!razon)return message.channel.send('orden: (estatus)(actividad)  (nombre de actividad)');
    
  var estatus = ["online","idle","dnd","offline","invisible"]
  var tipo = ["PLAYING","LISTENING","WATCHING"]
  var Constants = null
  
  let e1 = ["estatus-1", "estatus-online","estatus-conectado", "online","conectado","+"] 
  let e2 = ["estatus-2", "estatus-idle","estatus-ausente", "idle","ausente",")"] 
  let e3 = ["estatus-3", "estatus-dnd","estatus-no molestar","dnd","no molestar","-"] 
  let e4 = ["estatus-4", "estatus-stream","estatus-invisible","stream","invisible","0"] 
  let e5 = ["invisible","0","(0)"]
  
  if(e1.some(p => message.content.slice(prefix.length).toLowerCase().includes(p.toLowerCase()))){
  estatus = ["online"] };
    
    
    if(e2.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  estatus = ["idle"] };
      
        if(e3.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  estatus = ["dnd"] };
      
           if(e4.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  estatus = ["offline"] };
    
     if(e5.some(p => message.content.slice(1).toLowerCase().includes(p.toLowerCase()))){
  estatus = ["invisible"] };
             
             
  let t1 = ["tipo-1", "tipo-playing", "tipo-jugando", "playing", "jugando"] 
  let t2 = ["tipo-2", "tipo-listening", "tipo-escuchando", "listening", "escuchando"] 
  let t3 = ["tipo-3", "tipo-watching", "tipo-viendo", "watching", "viendo"] 
   
  
  if(t1.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  tipo = ["PLAYING"]  };
    
    if(t2.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  tipo = ["LISTENING"]  };
      
        if(t3.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  tipo = ["WATCHING"]  };
 
         
    let n1 = ["(cell)","(phone)","(android)","(ios)"]
    
    if(n1.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  var Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'} //O si quieres puedes cambiar 'Discord Android' por 'Discord iOs'.
 
    let n2 = ["(null)"]
    
    if(n2.some(p => message.content.slice(prefix).toLowerCase().includes(p.toLowerCase()))){
  var nav = ["null"]  };
    
    
    
  if(!args){
  args= null;
 

    };
    
    client.user.setPresence( {
      status: estatus[Math.floor(Math.random() * estatus.length)],
      game: {
          name: args.slice(1).join(' '),
          type: tipo[Math.floor(Math.random() * tipo.length)],
           browser: 'Discord iOs'
        }
      });
    message.channel.send("presence cambiado a: "+args.join(" "))
     };
  
  
  

  

  
//Saludos y despedidas.....................................................................................................................
  




        //Pruebas.....................................................................................................................

  
      if (!prefix) return;  
      
        switch (command){
    case "ping": 
    case "pepa":       
        message.channel.send(`pong 🏓!!`);
        break;
    case "lwp": 
        message.channel.send(`Hola como estas?`);
        break;
      
  }
  
   
      let s1 = [prefix +"hola",prefix +"que tal",prefix +"que onda",prefix +"que honda",prefix +"que hay"] 
   if(s1.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) {
     
     
      if(message.author.id == '662420316156329985') return message.channel.send(`Hola Ruben`);
     if(message.author.id == '666336007612006411') return message.channel.send(`Hola Ashley`);
    
       let elementos = ['Hola'];
       let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping() 
  
  

    
       
   } 
      let saludo = ["hola director","director hola","que onda director","director que onda","@Director#75000 hola"] 
   if(saludo.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
    
       let elementos = ['hola'];
       let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping()
     
     
     
     
     
     
 }
  if (message.content.startsWith(prefix + "buenos dias")) {
    
       let elementosR = ['Buenos dias guapo','que tal, buen dia'];
    let captura2 = elementosR[Math.floor(elementosR.length * Math.random())];
    if(message.author.id == '662420316156329985') return message.channel.send(captura2);
  
    let elementos = ['si, Buenos dias','O,hola,buenos dias','que tal, buen dia'];
    let captura = elementos[Math.floor(elementos.length * Math.random())];
  
  setTimeout(()=> {
  message.channel.send(captura);
},2000)
  
     

   }
  if (message.content.startsWith(prefix + "buenas tardes")) {
       let elementosR = ['buenas tardes'];
    let captura2 = elementosR[Math.floor(elementosR.length * Math.random())];
    if(message.author.id == '662420316156329985') return message.channel.send(captura2);
  
    let elementos = ['buenas tardes'];
    let captura = elementos[Math.floor(elementos.length * Math.random())];
  
  setTimeout(()=> {
  message.channel.send(captura);
},2000)
  
    
    
    }
  if (message.content.startsWith(prefix + "buenas noches")) {
       let elementosR = ['Bye, Buenas noches','Buenas noches,que descanses'];
    let captura2 = elementosR[Math.floor(elementosR.length * Math.random())];
    if(message.author.id == '662420316156329985') return message.channel.send(captura2);
  
    let elementos = ['Bye, Buenas noches','Buenas noches,que descanses'];
    let captura = elementos[Math.floor(elementos.length * Math.random())];
  
  setTimeout(()=> {
  message.channel.send(captura);
},2000)
    
   }
if (message.content.startsWith("Buenas noches a todos")) {
  setTimeout(()=> {
  message.channel.send("Descansa, que tengas un buen reposo para que mañana amanescas con fuerza.");
   },2000)
  
  
  
   }
  if (!prefix) return;
  switch (command){ 
    case "bye":
    case"adiós":
    case"adios":
    case"alrato":
    case"hasta luego":
    case"asta luego":
    case"nos vemos":
    case"bai":
    case"bie":
    case"aloha":
    case"bay":
    
      
      let elementosR = ['Hasta luego','Bye','adios'];
    let captura2 = elementosR[Math.floor(elementosR.length * Math.random())];
    if(message.author.id == '662420316156329985') return message.channel.send(captura2);
      break;
      
  
    let elementos = ['Hasta luego','Bye','adios'];
    let captura = elementos[Math.floor(elementos.length * Math.random())];
  
  setTimeout(()=> {
  message.channel.send(captura);
    },2000)
break;
  
  
    }
if(command === "hasta mañana"){
  setTimeout(()=> {
  message.channel.send("Hasta luego");
 },2000)
  
  
  
            }
 if (message.content.startsWith(prefix + "salude a")) {
const user= message.mentions.users.first()
if(!user) return message.channel.send(`olvidaste mencionar a un usuario ${message.author}`);
   setTimeout(()=> {
  message.channel.send(user +'HOLA');
       },2000)
  
 //Saludos erroneos.......
    }
   if (message.content.startsWith(prefix2 + "hola")) {
       setTimeout(()=> {
    message.channel.send("Hola");
   },1000)
  
     
      }

if (message.content.startsWith(prefix + "Buebos dias")) {
    if(message.author.id == '662420316156329985') return message.channel.send(`Buenos dias guapo`);
  message.channel.send("Disculpa, ¿me estás albureando?");

}

if (message.content.startsWith(prefix + "buebos dias")) {
  message.channel.send("Huevos ba con H"); 
     
  
  }
  
  if (message.content.startsWith(prefix + "Buebas noches")) {
          if(message.author.id == '662420316156329985') return message.channel.send(`Buenas noches Ruben, que tengas dulses sueños`);
    setTimeout(()=> {
  message.channel.send("¿Que?, perdón hijo, no te entiendo, habla mas claro");
},2000)
    
} 

if (message.content.startsWith(prefix + "buebas noches")) {
        if(message.author.id == '662420316156329985') return message.channel.send(`Buenas noches Ruben, que tengas dulses sueños`);
  setTimeout(()=> {
  message.channel.send("Lo siento, todabia no hablo tu idioma, hablame en Castellano");
  },2000)
  
  
   
     //Especiales.....................................................................................................................  
   

   
    //Preguntas..................................................................................................................... 
//unique answer..........................
    }
      let Q1 = [prefix +"¿cual es su color favorito",prefix +"cual es su color favorito",prefix +"¿cual es su color faborito",prefix +"cual es su color faborito"] 
if(Q1.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("ja, ¿no se nota?, el negro definitibamente, capta muy bien la esencia de mi alma, y me recuerda mucho a la oscuridad.");
 },2000)
      message.channel.stopTyping() 


       }
      let Q2 = [prefix +"¿cuantos años tiene",prefix +"cuantos años tiene"] 
if(Q2.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("¿que si cuantos años tengo?, no lo recuerdo, e existido desde hace tanto, probablemente un milenio quizas.");
 },2000)
      message.channel.stopTyping()     

}
      let Q3 = [prefix +"¿de donde es",prefix +"de donde es"] 
if(Q3.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("no se a que te refieras, ahora estoy viviendo en Estados Unidos, pero si te refieres a mi lugar de nacimiento realmente no lo recuerdo, realmente no recuerdo mucho de mi pasado, creo que fue por causa de un accidente o algo, aún tengo borroso todo ese asunto.");
 },2000)
      message.channel.stopTyping()  

  
  }
      let Q4 = [prefix +"¿en donde nacio",prefix +"en donde nacio",prefix +"¿en donde nació",prefix +"en donde nació",prefix +"¿en donde nasio",prefix +"¿en donde nasio"
                ,prefix +"¿en donde nasió",prefix +"en donde nasió",prefix +"¿donde nacio",prefix +"donde nacio",prefix +"¿donde nació",prefix +"donde nació"
                ,prefix +"¿donde nasio",prefix +"¿donde nasio"
                ,prefix +"¿donde nasió",prefix +"donde nasió"] 
if(Q4.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("No recuerdo mucho de mi infancia, tengo problemas de memoria con respecto a todo mi pasado, pero basado en mi lengua y mis tradiciones seguramente fue en algun país latino.");
 },2000)
      message.channel.stopTyping() 
  
  
  
  }
      let Q5 = [prefix +"¿cual es su pasatiempo",prefix +"¿cual es su pasatiempo",prefix +"¿que hace en su tiempo libre",prefix +"que hace en su tiempo libre"] 
if(Q5.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("Bueno, tengo muchos pasatiempos, pero entre mis pasatiempos favoritos están, autolecionarme o pedirle a alguien que lo aga por mi, practicar mi puntería con casi cualquier cosa que tenga a la mano, castigar a Macías y ultimamente e estado leyendo muchas novelas visuales, no se porqué.");
 },2000)
      message.channel.stopTyping()  


            }
      let Q6 = [prefix +"¿que le gustaría hacer en el futuro","que le gustaría hacer en el futuro"] 
if(Q6.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("El futuro es insierto hijo, si sobrevivo hoy, ya me doy por bien servido.");
 },2000)
      message.channel.stopTyping()  
  
  
   }
      let Q7 = [prefix +"¿le gusta el pan","le gusta el pan"] 
if(Q7.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("si");
 },2000)
      message.channel.stopTyping()  
            
   /*multiple answer............................*/
  
   } 
      let Qm1 = [prefix +"¿como se llama",prefix +"como se llama",prefix +"¿cual es su nombre",prefix +"cual es su nombre",prefix +"¿cual es su verdadero nombre",prefix +"cual es su verdadero nombre"] 
   if(Qm1.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
    
       let elementos = ['m¿me creerias si te dijiera que no lo se?','Director, llamame director','los nombres no importan, llamame Director','puedes decirme DIrector, el director, o lo que gustes'];
       let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping()  

 
       
      } 
      let Qm2 = [prefix +"¿que hace",prefix+"¿qué hace",prefix +"que hace",prefix+"¿que hase",prefix +"que hase",prefix+"¿qué ace",prefix +"que ace",prefix+"¿qué hase",prefix+"¿que ase",prefix+"que ase"]
  if(Qm2.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
    
         
      let elementos = ['mmm... nada interesante realmente, solo pestoy aqui perdiendo el tiempo','Dando le de comer al perro','Ahora no es buen momento, luego hablamos','Estoy leyendo una historia erotica en wattpad. No preguntes','Leo novelas visuales al mismo tiempo que estoy hablo contigo.','jugando con un latigo','trato de dormir pero no me dejas'];
      let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping()  

 
       
       
       
      } 
      let Qm3 = [prefix +"¿como está",prefix+"¿como esta",prefix +"como está",prefix+"como esta",prefix +"¿como a estado",prefix+"como a estado",prefix +"¿como anda",prefix+"como anda"]
  if(Qm3.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
    
         
      let elementos = ['a, no me puedo quejar','Ando que me lleba la \ud83e\udd2c','No entiendo tu pregunta, yo solo me e sentido de una forma toda mi vida. cuando la gente dise sentirse bien o mal, para mi siempre es lo mismo, no se cual es la diferiencia.','aburrido','ocupado','molesto','irritado','naa, masomenos'];
      let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping()  

    
    
          } 
      let Qm4 = [prefix +"¿que piensa del emmanuel",prefix +"¿que piensa de emmanuel",prefix +"¿que piensa del emanuel",prefix +"¿que piensa de emanuel",prefix +"que piensa del emmanuel",prefix +"que piensa de emmanuel",prefix +"que piensa del emanuel",prefix +"que piensa de emanuel"]
  if(Q4.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
    
         
      let elementos = ['no se de quien me hablas','no recuerdo ese nombre','no se quien es ese','no me suena ese nombre'];
      let captura = elementos[Math.floor(elementos.length * Math.random())];
  message.channel.startTyping() 
     setTimeout(()=> { 

message.channel.send(captura);
 },2000)
      message.channel.stopTyping()  
 
    
    

    
  } 
 if (!prefix) return;
  switch (command){
      case "¿porqué":
      case "¿porque":
      case "porqué":
      case "porque":
      
    let texto = args.join(" ");
       if(message.content.startsWith(prefixL + "porque")) return;
       if(message.content.startsWith("Lisy-¿porqué")) return;
   if (!texto) return message.reply(`¿porqué que?`);
    var rpts= ['porque asi es la vida, acostumbrate','no lo se, la vida es extraña','porque la vida es estupida.'];
  message.channel.send(rpts[Math.floor(Math.random()*rpts.length)]+'');
    break;
      
     
       
     }
    
   if(command === '¿'){
     let texto = args.join(" ");
    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    if (!texto) return message.reply(`si,¿que quieres?`);
    message.channel.send(message.member.user+' la respuesta a tu pregunta '+texto+' es: '+ rpts[Math.floor(Math.random() * rpts.length)]+'');

  
  }
  if(command === 'preg'){
    let texto = args.join(" ");
       if(message.content.startsWith("Lisy-preg")) return;
    if (!texto) return message.reply(`si,¿que quieres?`);
    var rpts= ["sí","No", "¿por qué lo preguntas?", "Por favor","No se", "Definitivamente", "¡Claro!", "Si","No", "Porsupuesto!","Porsupuesto que no"];
  message.channel.send(rpts[Math.floor(Math.random()*rpts.length)]+'');
  
  

 
  //Elogios..................................................................................................................... 
  
  }

if (message.content.startsWith(prefix + "guapo")) {
  message.channel.send("No eres mi alumno como para subirte la calificación, ¿que quieres?");
  
  
   }

if (message.content.startsWith(prefix + "Guapo")) {
  setTimeout(()=> {
  message.channel.send("Como siempre");
 },2000)

  
  }
if (message.content.toLowerCase().startsWith(prefix + "eres lindo")) {
  setTimeout(()=> {
  message.channel.send("que palabra tan afeminada, pero lo tomaré como un cumplido");
 },2000)
  
  
  }
if (message.content.startsWith(prefix + "eres hermoso")) {
  setTimeout(()=> {
  message.channel.send("aaajajaja, ni como negarlo.");
 },2000)
  
  
  }
if (message.content.startsWith(prefix + "eres muy hermoso")) {
  setTimeout(()=> {
  message.channel.send("lo soy sierto.");
 },2000)
  
  
    }
if (message.content.startsWith(prefix + "eres bonito")) {
  setTimeout(()=> {
  message.channel.send("esto se está poniendo raro");
 },2000)
  
  
      }
if (message.content.startsWith(prefix + "eres muy bonito")) {
  setTimeout(()=> {
  message.channel.send("si dejaras de decir esas cosas tan raras te lo agradesería.");
 },2000)
  
  
   }
  
  if (message.content.startsWith(prefix + "te quiero")) {
    setTimeout(()=> {
  message.channel.send("Siempre lo supe, se nota en la forma en que me miras");
},2000)
  
    
    
       }
if (message.content.startsWith(prefix + `te quiere`)) {
const user= message.mentions.users.first()
if(!user) return message.channel.send(`¿que?, ¿que ibas a decir? ${message.author}`);
      if(message.isMentioned(message.author)) return message.channel.send(`o, genial, pero... ¿porqué hablas en tersera persona?`);
      if(message.isMentioned('684423722068738194')) return message.channel.send(`Eso parese ¿no?, pero las apariencias a veses engañan.`);
      if(message.isMentioned('690979904946307220')) return message.channel.send(`jaja, si, ya lo sabía`);
      if(message.isMentioned('690979614012735488')) return message.channel.send(`si, lo se`);
      if(message.isMentioned('683915154995412998')) return message.channel.send(`si, me lo dise seguido`);
      if(message.isMentioned('662420316156329985')) return message.channel.send(`Yo tambien lo aprecio, no era mi alumno favorito, pero si estaba entre mis favoritos.`);
  
  

  
  
   setTimeout(()=> {
  message.channel.send('¿'+user +' me quiere?, ¿y porqué no me lo dijo antes?, a ya se, te da verguenza ¿e'+user+'?, no te preocupes, no nesecitas admitirlo ahora, puedes hacerlo cuando te sientas listo.');
       },2000)
  
  
  //Contacto..................................................................................................................... 
  
   }
if (message.content.startsWith(prefix + "cosquillas")) {
  setTimeout(()=> {
  message.channel.send("Wow,wow,wow, ¿que estás haciendo?, ¿eres omosexual o que?, no me buelbas a tocar, entendido.");
 },2000)
  
  }
if (message.content.startsWith(prefix + "palmada")) {
  setTimeout(()=> {
  message.channel.send("No me toques");
 },1000)  
  
   }
if (message.content.startsWith(prefix + "abrazo")) {
  setTimeout(()=> {
  message.channel.send("¡NOO!-se retira rapidamente-, eso es tan... tan incomodo, no lo buelbas a hacer...");
 },2000)
  
  }
  if (!prefix) return;
 switch (command){
      case "abrase a":
      case "abraze a":
      case "abrasa a":
      case "abraza a":
     
  if(message.isMentioned('684423722068738194')) return message.channel.send(`No importa si soy yo, no lo voy a hacer.`);
const user= message.mentions.users.first()
if(!user) return message.channel.send(`ni siquiera lo pienses ${message.author}`);
   setTimeout(()=> {
  message.channel.send('lo siento, yo no suelo hacer ese tipo de cosas.');
       },1000)
  break;

  
  //comandos especiales..................................................................................................................... 
       
                                                     //...comandos decir...
  }
if (message.content.startsWith(prefix + "sayr")) {
let texto = args.join(" ")
let perms = message.member.hasPermission("MANAGE_MESSAGES");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
if(!texto) return message.channel.send(`Que quieres que diga?`);
message.channel.send(`${args.join(" ").slice(0)}`);
message.delete()

  
}
  if (message.content.startsWith(prefix + "say")) {
    let texto = args.join(" ");
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
    if(!texto) return message.channel.send(`Que quieres que diga?`);
    message.channel.send(args.join(" "));
    message.delete();
  
   }
  if (message.content.startsWith(prefix + "saix")) {
    let texto = args.join(" ");
    message.channel.send(args.join(" "));
    message.delete(); 
    
 
  
    

    
    }
if(command === 'diga'){
if(message.author.id !== '662420316156329985') return;
  let texto = args.join(" ");
    if(!texto) return message.channel.send(`¿Que cosa?`);
    message.channel.send(texto);
    
  
  
  
  }
    if(command === 'delte' ){
      
if(!message.guild.me.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("Perdon, pero no tengo permisos")
}

if(!message.member.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("Perdon, pero no tienes permisos")
}

if(!args) return message.channel.send('Escriba la cantidad de mensajes a eliminar');
let cantidadm = parseInt(args[0])

if(!cantidadm) return message.reply("Introduce un numero por favor") 

if(cantidadm > 100){
    message.channel.send("El maximo de mensajes que puedo borrar es 100, por lo tanto lo establecere automaticamente ahi")
    cantidadm = 100
  
  }

message.channel.send(`Voy a borrar los ${cantidadm} mensajes`)

message.channel.fetchMessages({limit: cantidadm}).then((mensajes) => {
    var msgs = mensajes.filter(m => !m.pinned && !m.system)


    message.channel.bulkDelete(msgs).then(() => {
        message.channel.send(`Listo, borre los ${cantidadm} mensajes :ok_hand:`).then(m => m.delete(20000))
    }).catch(e => {
        switch(e.message){
            case("You can only bulk delete messages that are under 14 days old."):{
                message.channel.send("Solo puedo borrar mensajes con menos de 2 semanas de antigüedad")
            }
            //aqui ire poniendo mas mensajes a medida que se me ocurran o vea en el canal de ayuda
            default:{
                console.log("Ocurrio un error desconocido en el comando para borrar mensajes \n" + e)
                message.channel.send("Err, no pude borrar los mensajes :exclamation:")
            }
        }
    })
})
  
    
                                                         //...comandos enviar...
      
   }
  if (message.content.startsWith(prefix + "send")) {
      const user= message.mentions.users.first()
     let mensaje = args.slice(1).join(" ");
     if (!user)
      return message.channel.send(
        `mencione a un usuario`);
        
      if (!mensaje)
      return message.channel.send(
        `Escriba un mensaje para enviartelo por privados.`
      );
   message.delete();
   message.mentions.users.first().send(mensaje);

    
    
    
    }
  if (message.content.startsWith(prefix + "privown")) {
    let mensaje = args.join(" ");
 
    if (!mensaje)
      return message.channel.send(
        `Escriba un mensaje para enviartelo por privados.`
      );
    message.author.send(mensaje);
    
    
    
  
                                                     //...comandos de informacion...
    
 }
  if (message.content.startsWith(prefix + "user")) {
    let userm = message.mentions.users.first();
 
    if (!userm) {
      var user = message.author;
 
      const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username + "#" + user.discriminator, user.avatarURL)
        .addField(
          "Jugando a",
          user.presence.game != null ? user.presence.game.name : "Nada",
          true
        )
        .addField(":id:ID", user.id, true)
        .addField("Estado", user.presence.status, true)
        .addField("Apodo", message.member.nickname, true)
        .addField(
          ":inbox_tray:Cuenta Creada",
          user.createdAt.toDateString(),
          true
        )
        .addField(
          ":outbox_tray:Fecha de Ingreso",
          message.member.joinedAt.toDateString()
        )
        .addField(
          ":shield:Tus Roles",
          message.member.roles.map(roles => `\`${roles.name}\``).join(", ")
        )
        .setColor("#39363E");
 
      message.channel.send(embed);
    } else {
      const embed = new Discord.RichEmbed()
        .setThumbnail(userm.avatarURL)
        .setAuthor(userm.username + "#" + userm.discriminator, userm.avatarURL)
        .addField(
          "Jugando a",
          userm.presence.game != null ? userm.presence.game.name : "Nada",
          true
        )
        .addField("ID", userm.id, true)
        .addField("Estado", userm.presence.status, true)
        .addField("Cuenta Creada", userm.createdAt.toDateString(), true)
        .setColor("#39363E");
 
      message.channel.send(embed);
    }
  
    
    
    
     }
  if (message.content.startsWith(prefix + "avatar")) {
    let miembro = message.mentions.users.first();
    if (!miembro) {
      const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor("#39363E")
        .setFooter(`Avatar de ${message.author.tag}`);
      message.channel.send({ embed });
    } else {
      const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor("#39363E")
        .setFooter(`Avatar de ${miembro.tag}`);
 
      message.channel.send({ embed });
    }
    
    
    
    
    
                                                         //...comandos de invitacion...
    
    
      
  
      }
  if (message.content.startsWith(prefix + "invitacion")) {
  client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
    "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
.then(link =>{
    message.channel.send('Link de invitación: '+ link);
          
});

  
  }
  if (message.content.startsWith(prefix + "invitechannel")) {
     if(message.author.id !== '662420316156329985') return;
    var idchannel = message.channel.id;
    message.guild.channels
      .get(idchannel)
      .createInvite({
        maxAge: 1 //maxAge: 0 significa que el link sera permanente
      })
      .then(invite => message.channel.send(invite.url));

    
     }
    if(message.content.startsWith(prefix+'invitebot')){
    message.channel.send({embed: {
    color: 0x0d0d0d,
    author: {
    name: "Mi link de invitación.",},
    //title: "Disfruta~.",
    description: "[Click aquí para invitar a Director!](https://discordapp.com/oauth2/authorize?client_id=684423722068738194&permissions=269494300&scope=bot)"},
    });
    
   
 
    
    
    
    
    
    
       
                                              //...comandos de reinicio...
    
    }
  if(message.content.startsWith(prefix+'restart')){
      if (message.author.id !== '662420316156329985')
        return message.channel.send("This command can only be used by: Owner de bot")
                   //En el var rpts, la dirección url del gif
            var thumb = ['https://i.pinimg.com/originals/c7/d6/c7/c7d6c7ef381100140152c25d244139df.gif'];
      var enlace = thumb[Math.floor(Math.random() * thumb.length)]
//Mensaje embed a enviar
      const embed = new Discord.RichEmbed() 

        .setTitle("Director » Reiniciado Correctamente!")
        .setThumbnail(enlace)
    .setDescription(`**• ${message.author}, Restarting, wait 5 seconds.**`)
        .setColor(0x000000)
    .setFooter(`${message.author.tag}`);

        message.channel.send({embed}).then(() => {
    client.destroy().then(() => {
        process.exit();
        });
    })

    
  
      
                                                             //...comandos de auditoria...


   }
  if(command === 'kick' ){

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

  
  
      }
  if (message.content.startsWith(prefix + "mute")) {
    let miembro = message.mentions.members.first();
    let rol = message.guild.roles.find(r => r.name === "muted");
    if (!rol)
      return message.channel.send("Rol ´Muted´ no encontrado en el servidor");
    if (!miembro) return message.reply("Debe mencionar a un miembro.");
    miembro.addRole(rol).catch(console.error);
    message.channel.send(
      `Se le agregó el mute a **${miembro.user.username}**.`
    );   
    

       }
  if (message.content.startsWith(prefix + "unmute")) {
    let miembro = message.mentions.members.first();
    let rol = message.guild.roles.find(x => x.name === "muted");
    if (!rol)
      return message.channel.send("Rol ´Muted´ no encontrado en el servidor");
    if (!miembro) return message.reply("Debe mencionar a un miembro.");
    miembro.removeRole(rol).catch(console.error);
    message.channel.send(
      `Se le quitó el mute a **${miembro.user.username}**.`
    );   
    
    
    
      
  }
  if (message.content.startsWith(prefix + "warn")) {
    
    let emojiNo = client.emojis.find(emoji => emoji.name === "NoAnimated");
    var perms = message.member.hasPermission("MANAGE_MESSAGES"); // Permiso
    if (!perms)
      return message.channel.send(
        `${emojiNo} ¡No tienes permisos suficientes!`
      );
    let wUser = message.mentions.users.first();
    let mUser = message.author.username;
    let channel = client.channels.get("693739157935095869");
    let razon = args.join(" ").slice(22);
    if (!razon)
      return message.channel.send(
        "`Uso correcto:` **s!warn [Usuario] [Razón]**"
      );
 
    'await' (db).add(`UserWarning_${wUser.id}_${message.guild.id}`, 1);
    let count = 'await' (db).fetch(`UserWarning_${wUser.id}_${message.guild.id}`);
 
    message.channel.send(`\`\`\`js\nMIEMBRO ADVERTIDO: ${wUser.tag})
📋RAZÓN: ${razon}
👤POR: ${mUser}
\n\`\`\``);
    if (count === 5) return message.guild.kick(wUser);
  
  
    
    
    
    
    
    
    }
    if(message.content.startsWith(prefix+'eval')){ //Abrimos el comando
        if(message.author.id !== "662420316156329985") {
            let embed = new Discord.RichEmbed() //Creamos el embed
            .setDescription("Mmm, no tienes los permisos suficientes para hacer esto")
        message.channel.send(embed)
        }


        let toEval = args.join(" ") //Definimos toEval con argumentos
        if(!toEval) { //Creamos un if para que diga
            let embed = new Discord.RichEmbed()
            .setDescription("Necesitas evaluar __*ALGO*__")
            .setColor("RANDOM")
            message.channel.send(embed)
            .then(m => m.delete(1000))
        }
        try { //Hacemos un try
         if(args.join(" ").toLowerCase().includes("token")){
             return;
        }
        let evaluated = eval(toEval) //"evaluated" va a evaluar el comando
       
        let beautify = require("beautify") //Se usa beautify para que funcione
        let embed = new Discord.RichEmbed() //Creamos otro embed
        .setColor("RANDOM")
        .setTimestamp() //Usamos un Timestamp
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle("🖥️ NombreBotEval")
        .setDescription("Este comando sirve para ejecutar codigos")
        .addField("Codigo:", "js\n"+beautify(args.join(" "), { format: "js" })+" ")
        .addField("Lo evaluado:", "js\n"+evaluated+"") //Aca aparecera lo que se evalua
        message.channel.send(embed)
    } catch(err) { //Hacemos un catch y que defina err
        let beautify = require("beautify")
       let embed2 = new Discord.RichEmbed()
       .setTimestamp()
       .setFooter(client.user.username, client.user.displayAvatarURL)
       .addField("Hubo un error con el codigo que evaluaste", "js\n"+err+"") //Va a aparecer el error
       .setColor("RANDOM")
       message.channel.send(embed2) 
    }
    
    
    
    
    
    
    }
if(message.content.startsWith(prefix+'botavatar')){
  var ids = ["662420316156329985"]//ahi pones tu id dentro de las comillas para que nadien pueda utilizar ese comando, solo usted.
let avatarurl = args.join(" ")
if(!ids.some(ids => message.author.id == ids)) return; 
if(!avatarurl) return message.reply('Debes poner un enlace.')//aqui te dice por si no pusiste una imagen url

client.user.setAvatar(avatarurl)//ahi estaria cambiando el avatar
  
  message.channel.send('Avatar cambiado! \n\n Nuevo avatar   :\n' + avatarurl).then(m => m.delete(5000))//ahi dice que exitosamente se agrego el nuevo avatar

//Si tengo mas apoyo subire un comando que de nitro(unchecked)


            }
if(message.content.startsWith(prefix+'botname')){
  var ids = [""];//ahi pones tu id para que nadien pueda utilizar mas este comando. 
let nombre = args.join(" ")
if(!ids.some(ids => message.author.id == ids)) return;

if(!nombre) return message.reply('Debes poner un nombre.')//esto enviara al canal que pusiste el comando si no pusistes un nombre.
  const embed = new Discord.RichEmbed()//un simple embed...
  .setTitle('Mi nombre ha sido cambiado')
  .setDescription('Nuevo nombre: **' + nombre + '**')
  .setColor('RANDOM')
  
  message.client.user.setUsername(nombre)//aqui cambia el nombre del bot
  message.channel.send(embed).then(m => m.delete(10000))




/*
Agrega un rol especifico a un usuario mencionado
usando el metodo add(), requiere permisos de MANAGE_ROLES

Formato: -comando <mencion> <nombre del rol>
*/
  
              }
if(message.content.startsWith(prefix+'addrole')){
if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
  return message.channel.send("No tengo permisos")
}

if(!message.member.hasPermission("MANAGE_ROLES")){
  return message.channel.send("Perdon, pero no tienes permisos")
}

let persona = message.mentions.members.first()
if(!persona) return message.channel.send('Debe mencionar a alguien para darle el rol')

let nombrerol = args.slice(1).join(' ')
if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar')

let rol = message.guild.roles.cache.find(r => r.name == nombrerol)

if(!rol){
  return message.channel.send('Rol no encontrado en el servidor')
  
}else if(!rol.editable){
  return message.channel.send("Lo siento, pero no puedo darle ese rol a nadie, debido a que esta mas alto que mi rol")
  
}else if(rol.comparePositionTo(message.member.highestRole) > 0){
  return message.channel.send("Ese rol es mas alto que tu rol mas alto (en lo que a jerarquia se refiere), asi no puedes darselo a nadie")
  
}

persona.roles.add(rol.id).catch(e => message.reply("Ocurrio un **error**"))
message.channel.send(`Listo, le agrege el rol **${rol.name}** a **${persona.user.username}**`)

  
      
      
      
      }
      if(message.content.startsWith(prefix+'changenickname')){
      if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { //Verificamos si el bot tiene permisos suficientes
    return message.channel.send("[Ã¢ÂÂ] No tengo permisos || **Necesito permisos de `Gestionar apodos`**") //lo que dice si no tiene permisos
}
  
if(!message.member.hasPermission("MANAGE_NICKNAMES")){ //Verificamos si user tiene permisos suficientes
    return message.channel.send("[Ã¢ÂÂ] No tienes permisos || **Necesitas permisos de `Gestionar apodos`**") //lo que dice si no tiene permisos
}

let persona = message.mentions.members.first() //Definimos "persona" como al que le hizo ping
if(!persona) {
    return message.channel.send("[Ã¢ÂÂ] No hay una persona || **Debes mencionar a una persona**") //lo que dice si no menciono a nadie
}else if(persona.highestRole.comparePositionTo(message.member.highestRole) > 0){
    return message.channel.send("[Ã¢ÂÂ] No tienes permisos || **Esa persona tiene tu mismo o superior rol**") //lo que dice si esa persona tiene tu mismo o  superior rol *Depende de la jerarquia de discord*
}
let apodo = args.slice(1).join(' ') //Defiinimos "apodo" como el nuevo apodo del "persona"
if(!apodo) return message.channel.send("[Ã¢ÂÂ] No hay apodo || **Debes escribir el apodo a cambiar**") //lo que dice si no hay apodo definido
persona.setNickname(apodo) //El bot hace el cambio del apodo usando "persona" y "apodo"
message.channel.send(`Listo, el nuevo apodo de ${persona} es **${apodo}**`) //Mensaje diciendo el nuevo apodo de la persona

      
      
      
      
    
    
                                                                 //...comandos de entretenimiento...
    
    
    
    
    
    
  }
if(message.content.startsWith(prefix + 'flipcoin')){
  
const coin = 
['https://cdn.discordapp.com/attachments/315914386944557056/369580701269360656/cara.png',
 'https://cdn.discordapp.com/attachments/315914386944557056/369580737919451137/sello.png'];


message.channel.send('**'+message.author.username+'** sacaste:',{files: [coin[Math.floor(coin.length * Math.random())]]});
  
  

 }
if(message.content.startsWith(prefix+'love')){
let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje de amor de '+users+' es:')
    .setDescription(heard+' **'+random+' %**'+' '+heard)
    .setColor(0xff4d4d)

message.channel.send(embed);
  
  

  

  
  }
if(message.content.startsWith(prefix+'newlove')){

let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('**Por favor mencione a dos usuarios para calcular.**');// es por si pusiste solamente el comando
    
const random = Math.floor(Math.random() * 100);// math.random para hacerlo random
let heard = "";
 
    if(random < 50){
        heard='💔';

    }else if(random < 80){
        heard='💖 ';
        
    }else if(random < 101){
        heard='❤️';

    }
let Corazon = "";
            if(random < 50){
           Corazon='https://media.tenor.com/images/ecb0e573a315d2c892d8ef7f0d5d3bd1/tenor.gif';

          }else if(random < 80){
            Corazon='https://media.tenor.com/images/d8aaae3c33bb6214fa708c4acee005fb/tenor.gif';

            }else if(random < 101){
                Corazon='https://media.tenor.com/images/552069b71d75b49630c14c323ff8b8fa/tenor.gif';


            }
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje de amor de '+users+' es:')//los usuarios que elejiste estan en '+users+'
    .setDescription('**'+random+' %**'+' '+heard)//aqui hace el math random
    .setImage(Corazon)
    .setColor("RED")//puedon ponerle el que ustedes quieran

message.channel.send(embed);
  

  
  
  
  
  
  
    }
  if (message.content.startsWith(prefix + "randomuser")) {
    message.channel.send('Afortunado: **'+ message.guild.members.random().user+'**');
    
    
    
     }
  if (message.content.startsWith(prefix + "quest")) {
    if (!args)
      return message.channel.send("Agrege una pregunta para la encuesta.");
 
    const embed = new Discord.RichEmbed()
      .setAuthor("Pregunta:")
      .setDescription("**" + args.join(" | ") + "**\n=============")
      .addField("Opcion 1", "1\u20e3 Si")
      .addField("Opcion 2", "2\u20e3 No")
      .setColor("#39363E")
      .setTimestamp();
 
    message.channel.send(embed).then(m => {
      m.react("1\u20e3");
      m.react("2\u20e3");
    });
    
    
    
    
     }
  if (message.content.startsWith(prefix + "anuncio")) {
    const canal =
      message.mentions.channels.first() || message.guild.channels.get(args[0]);
    if (!canal) return message.channel.send(`Dime un canal`);
    const anuncio = args.slice(1).join(" ");
    if (!args[1]) return message.channel.send("Dime tu mensaje");
    const embed = new Discord.RichEmbed()
      .setTitle(":loudspeaker: **Anuncio** :loudspeaker:")
      .setColor("#39363E")
      .setDescription("||@here||"+anuncio)
      .setFooter(`Enviado Por : ${message.author.tag}`, client.user.avatarURL)
      .setTimestamp();
 
    canal.send({ embed });
    
    
    
   
    
    }
  if (message.content.startsWith(prefix + "luegoloarreglo")) {
    let yt = new Discord.RichEmbed()
      .setDescription("**__Rangos YT__**")
      .addField("**[💻] YouTuber [💻] :**", "**250 Subs.**")
      .addField("**[📱] MiniYT [📱] :**", "**120 Subs.**")
      .addField("**[🎥] Famoso [🎥] :**", "**: 1000 Subs.**")
      .setColor("#39363E");
    message.channel.send(yt);
    
   }
  if (message.content.startsWith(prefix + "reload")) {
    const Embed = new Discord.RichEmbed()
      .setTitle("**:x: Acceso Denegado**")
      .setColor("#39363E")
      .setDescription("Este comando es solo para el desarrollador!");
 
    if (
      message.author.id !== "662420316156329985" &&
      message.author.id !== "662420316156329985"
    )
      return message.channel.send(Embed);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("#39363E")
      .setTitle("`Reiniciando...`")
      .setDescription(`El Bot Se Reiniciará...`)
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/MsxN-nT6-FyKOhaJrc7PxaKXlKi9ocuSabmMSNwrD58/https/i.redd.it/a8keeuutawx01.gif"
      )
      .setFooter(`|  Shuftle Community | `, client.user.avatarURL);
    message.channel.send(embed).then(() => {
      client.destroy().then(() => {
        process.exit();
      });
    });

    

  }
if(message.content.startsWith(prefix+'digame un numero')){
let roll = message.content.split(' ').slice(3);
if(roll < 0) return message.reply(`escriba un número entre 1 y 100!`);
if(roll > 100) return message.reply(`escriba un número entre 1 y 100!`);
    
let randomroll  = Math.floor(Math.random() * roll) + 1;
let random = Math.floor(Math.random() * 100) + 1;
    
if(!roll[0]){
    message.channel.send('mmm... yo elijo.... el numero '+random)}
   
  


      }
if(message.content.startsWith(prefix+'reverse')){
const args = message.content.slice(prefix.length).trim().split(/ +/g) // Definimos args
const reverse = args.slice(1).join(" ").split("").reverse().join("") //Damos vuelta los args (argumentos)
    if(!reverse) return message.channel.send('Coloca un texto por favor.') //Si no hay texto
    message.channel.send(reverse) //Enviamos el mensaje
      
      
      
    
  
        }
if(message.content.startsWith(prefix+'buscar')){
  const google = require("google");
let text = args.join(" ")
google.resultsPerPage = 1
google.protocol = 'https'
let contandor = 0;

let iconGoogle = "https://cdn2.iconfinder.com/data/icons/social-media-8/512/Chrome.png";

google(text, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return message.channel.send('No se encontraron resultados.');
      }
      if (link.href == null)    {
       return message.channel.send('No se encontraron resultados.');
      }

      const gEmbed = new Discord.MessageEmbed()
        .setAuthor(`Resultados De La Busqueda ${text}`)
        .setColor('#F4B400')
        .setThumbnail(iconGoogle)
        .addField('Sitio Web', link.title)
        .addField('Descripcion', link.description)
        .addField('URL', link.href);

        message.channel.send(gEmbed);
    }

    if (contandor < 1) {
      contandor += 1
      if (res.next) res.next()
    }

  });
  
  
  
       }

  if(message.content.startsWith(prefix+'ppt2')){

let opciones = args.slice(0).join(' ');

if(!opciones)return message.channel.send("Opciones: `piedra`, `papel` o `tijera`");
  
 var resp = ["null"]
      


    
    
     let p1 = ["piedra"]
  
  if(p1.some(p => message.content.slice(prefix.length).toLowerCase().includes(p.toLowerCase()))){
  resp = ["¡Ganaste! Has elejido `piedra` y yo elegí `tijera`.", //win
                "¡Gané!, Has elejido `piedra` y yo elegí `papel`.", //loser
                "Empate. Has elejido `piedra` y yo elegí `piedra`."] };

          
          let p2 = ["papel"];
       
        if(p2.some(p => message.content.toLowerCase().includes(p.toLowerCase()))){  
          resp = ["¡Gané!. Has elejido `papel` y yo elegí `tijera`", //loser
                 "Empate. Has elejido: `papel` Y yo elegí `papel`.", //draw
                 "¡Ganaste!. Has elejido `papel` y yo elegí `piedra`."]}; //win
          
          
          let t = ["tijera","tigera"];
       
        if(t.some(p => message.content.toLowerCase().includes(p.toLowerCase()))){  
          resp = ["Empate. Has elejido: `tijera` y yo elegí `tijera`.", //draw
                 "¡Ganaste!. Has elejido `tijera` y yo elegí `papel`.", //win
                 "¡Gané!. Has elejido `tijera` y yo elegí `piedra`."]}; //loser
  
     message.reply(` ${resp[Math.floor(Math.random() * resp.length)]}`)
 
  
  
  
  
  }
  if(message.content.startsWith(prefix+'ppt')){
if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`")

let opciones = ["piedra", "papel", "tijera"]
if(!opciones.includes(args[0].toLowerCase())) return message.channel.send("¡Opción incorrecta!")

if(args[0] == 'piedra') {
  let random = ["¡Ganaste! Has elejido `piedra` y yo elegí `tijera`.", //win
                "¡Gané!, Has elejido `piedra` y yo elegí `papel`.", //loser
                "Empate. Has elejido `piedra` y yo elegí `piedra`."] //draw
  
  message.reply(` ${random[Math.floor(Math.random() * random.length)]}`)

 }

if(args[0] == 'papel') {
  let random2 = ["¡Gané!. Has elejido `papel` y yo elegí `tijera`", //loser
                 "Empate. Has elejido: `papel` Y yo elegí `papel`.", //draw
                 "¡Ganaste!. Has elejido `papel` y yo elegí `piedra`."] //win
  
  message.reply(` ${random2[Math.floor(Math.random() * random2.length)]}`)

 }

if(args[0] == 'tijera') {
  let random3 = ["Empate. Has elejido: `tijera` y yo elegí `tijera`.", //draw
                 "¡Ganaste!. Has elejido `tijera` y yo elegí `papel`.", //win
                 "¡Gané!. Has elejido `tijera` y yo elegí `piedra`."] //loser
  
  message.reply(` ${random3[Math.floor(Math.random() * random3.length)]}`)
 }




/*
  ¿Cómo se usa?:

<prefix>rps < piedra / papel / tijera >

*/
  
  
  }
  if(message.content.startsWith(prefix+'ppt3')){
if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`")

let opciones = ["piedra", "papel", "tijera"]
if(!opciones.includes(args[0].toLowerCase())) return message.channel.send("¡Opción incorrecta!")

if(args[0] == 'piedra') {
  let random = ["¡Ganaste! Has elejido `piedra` y yo elegí `tijera`.", //win
                "¡Gané!, Has elejido `piedra` y yo elegí `papel`.", //loser
                "Empate. Has elejido `piedra` y yo elegí `piedra`."] //draw
  
  message.reply(` ${random[Math.floor(Math.random() * random.length)]}`)

 }

if(args[0] == 'papel') {
  let random2 = ["¡Gané!. Has elejido `papel` y yo elegí `tijera`", //loser
                 "Empate. Has elejido: `papel` Y yo elegí `papel`.", //draw
                 "¡Ganaste!. Has elejido `papel` y yo elegí `piedra`."] //win
  
  message.reply(` ${random2[Math.floor(Math.random() * random2.length)]}`)

 }

if(args[0] == 'tijera') {
  let random3 = ["Empate. Has elejido: `tijera` y yo elegí `tijera`.", //draw
                 "¡Ganaste!. Has elejido `tijera` y yo elegí `papel`.", //win
                 "¡Gané!. Has elejido `tijera` y yo elegí `piedra`."] //loser
  
  message.reply(` ${random3[Math.floor(Math.random() * random3.length)]}`)
 }


 
    
    
   //comandos especiales end.............
  //caseria y pesca.....................................................................................................................   
  
  /*

Un simple metodo de pesca tipo fish del bot tatsumaki
usando Math.random()
*/

     }
  if(message.content.startsWith(prefix+'pescar')){

    let member= message.member
        let req = message.member.roles.find(r => r.name === "pescador");
    if (!req)
      return message.channel.send(member.displayName +" nesecitas una caña de pescar para usar este comando.");
    
 
let rollfish = Math.floor(Math.random() * 7) +1;
if(rollfish === 1){
    message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: 🐠');

}else if(rollfish === 2){
    message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: 🐟');

  }else if(rollfish === 3){
    message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: 👞');
  
    }else if(rollfish === 3){
    message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste:  🦐');
   
}else {
     
    message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: nada 💁‍♀️');
}

    
    
    
    
    
    
     }
  if(message.content.startsWith(prefix+'newpescar')){
    
  const random = Math.floor(Math.random() * 100);
           let GifPez = "";

             if(random < 20){
            GifPez='https://img.europapress.es/fotoweb/fotonoticia_20180723142203_1024.jpg';

             }if(random < 40){
           GifPez='https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-peces-se-vuelven-mas-timidos-por-la-pesca-submarina/6307000-1-esl-MX/Los-peces-se-vuelven-mas-timidos-por-la-pesca-submarina.jpg';

               } else if(random < 50){
                    GifPez='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blowfish-catherine-howley.jpg'

              }else if(random < 65){
                 GifPez='https://i.insider.com/57a4db43dd089551028b4663?width=1100&format=jpeg&auto=webp'

          }else if(random < 80){
            GifPez='https://st.depositphotos.com/1000561/1230/i/950/depositphotos_12308182-stock-photo-nice-fresh-squid.jpg';

            }else if(random < 101){
                GifPez='https://www.ecestaticos.com/imagestatic/clipping/a4a/1a8/a4a1a86b5e894d0fe072e6fb489e8e1b/el-video-viral-donde-se-puede-ver-como-suena-un-pulpo-y-es-precioso.jpg?mtime=1579565836';


            }      
    
    const embed = new Discord.RichEmbed()
    .setAuthor( message.author.username + ' Lanzo la caña de pescar y....')
    .setDescription('**Encontro un pez... veamoslo:**')
    .setImage(GifPez)
    .setColor("RANDOM")
    .setFooter("Dev: Drock")
    message.channel.send(embed)
    
  //gifs..................................................................................................................... 
       
  

   }
  if(message.content.startsWith(prefix+'kiss')){
    let miembro = message.mentions.members.first();

    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://cdn.weeb.sh/images/rkM4nTOPb.gif",
      "https://cdn.weeb.sh/images/rypMnpuvW.gif"
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " Besó a " + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
message.channel.send(embed);
  

    
    

    
  }
  if(message.content.startsWith(prefix+'slap')){
   let miembro = message.mentions.members.first();

    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://cdn.weeb.sh/images/Hy09QJFDZ.gif",
      "https://cdn.weeb.sh/images/H1n57yYP-.gif",
      "https://media3.giphy.com/media/reXcrlJ3OhvDq/source.gif",
      "https://pa1.narvii.com/6807/ac91cef2e5ae98f598665193f37bba223301d75c_hq.gif",
      "https://media1.tenor.com/images/6e3d6090cc69a6405ab8d7c24eac5334/tenor.gif?itemid=12216742",
      
      
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " abofeteó a " + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
message.channel.send(embed);
  

    
    }
  if(message.content.startsWith(prefix+'hug')){
    let miembro = message.mentions.members.first();
let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('Mencione a un usuarios');
    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://media1.tenor.com/images/4517af9acc82e9ac33e616953093321e/tenor.gif?itemid=12257853",
      "https://media.tenor.com/images/0a1652de311806ce55820a7115993853/tenor.gif",
      "https://media3.giphy.com/media/ZBQhoZC0nqknSviPqT/200.gif",
      "https://media0.giphy.com/media/3M4NpbLCTxBqU/source.gif",
      "https://media.giphy.com/media/IpXg8GcqXlQXu/giphy.gif",
      "https://thumbs.gfycat.com/GrossScaredAlligator-size_restricted.gif"
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " Abrasó a " + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
message.channel.send(embed);
    
    
    
    }
  if(message.content.startsWith(prefix+'fatality')){
    let miembro = message.mentions.members.first();
    let user = message.member
    
    let rol = message.guild.roles.find(r => r.name === "asecino");
     if (!rol)
      return message.channel.send("Rol ´asecino´ no encontrado en el servidor");
    
    let rol2 = message.guild.roles.find(r => r.name === "muerto");
     if (!rol2)
      return message.channel.send("Rol ´muerto´ no encontrado en el servidor");
    
    let rol3 = message.guild.roles.find(r => r.name === "inmortal");
     if (!rol3)
      return message.channel.send("Rol ´inmortal´ no encontrado en el servidor");
    
    let inmune = message.mentions.members.first().roles.find(r => r.name === "inmortal");
    if (inmune)
      return message.channel.send("No puedes matar a "+ miembro.displayName +" porque es inmortal.");
    
    
    
    
    
    
    
    
    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://media1.tenor.com/images/15d241522a6fba53f8cda5387440b002/tenor.gif?itemid=15375856",
    
      "https://imgur.com/XC4hk2q.gif"
      
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " le iso un fatality a " + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
message.channel.send(embed);
    
    
    user.addRole(rol).catch(console.error) &&
  
miembro.addRole(rol2).catch(console.error) &&
  
message.channel.send(embed).then(m => m.delete(20000));
    
    
    
    
    
    
    
    
    
  
  }
  if(message.content.startsWith(prefix+'patada')){
    let miembro = message.mentions.members.first();

    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://media.tenor.com/images/41955e1ddfbb95e57ba08e4b7b13fea5/tenor.gif",
      "https://imgur.com/NteEOwM.gif",
      "https://media1.giphy.com/media/qiiimDJtLj4XK/giphy.gif",
      "https://vignette.wikia.nocookie.net/fairytail/images/9/94/Regulus_Lucy_Kick.gif/revision/latest/top-crop/width/360/height/450?cb=20181016173815&path-prefix=es",
      "https://media1.tenor.com/images/55b5407f3d85fdf96d8188c62b66471c/tenor.gif?itemid=4589951",
      "https://media0.giphy.com/media/LICtqQ1K8ClIQ/giphy.gif"
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " le dio una patada a" + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
message.channel.send(embed);
    
    
    
    
      }
  if(message.content.startsWith(prefix+'kill')){
    let miembro = message.mentions.members.first();
    let user = message.member
    
    let rol = message.guild.roles.find(r => r.name === "asecino");
     if (!rol)
      return message.channel.send("Rol ´asecino´ no encontrado en el servidor");
    
    let rol2 = message.guild.roles.find(r => r.name === "muerto");
     if (!rol2)
      return message.channel.send("Rol ´muerto´ no encontrado en el servidor");
    
    let rol3 = message.guild.roles.find(r => r.name === "inmortal");
     if (!rol3)
      return message.channel.send("Rol ´inmortal´ no encontrado en el servidor");
    
    let inmune = message.mentions.members.first().roles.find(r => r.name === "inmortal");
    if (inmune)
      return message.channel.send("No puedes matar a "+ miembro.displayName +" porque es inmortal.");
   
    
    if(!miembro) return message.channel.send('Mencione a un usuario');
const random = Math.floor(Math.random() * 100);
let heard = "";
 
 
 
    
    let elementos = [
      "https://media.tenor.com/images/41955e1ddfbb95e57ba08e4b7b13fea5/tenor.gif",
      "https://imgur.com/NteEOwM.gif",
      "https://media1.giphy.com/media/qiiimDJtLj4XK/giphy.gif",
      "https://vignette.wikia.nocookie.net/fairytail/images/9/94/Regulus_Lucy_Kick.gif/revision/latest/top-crop/width/360/height/450?cb=20181016173815&path-prefix=es",
      "https://media1.tenor.com/images/55b5407f3d85fdf96d8188c62b66471c/tenor.gif?itemid=4589951",
      "https://media0.giphy.com/media/LICtqQ1K8ClIQ/giphy.gif"
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " mató a" + miembro.displayName)
    .setColor(0x0d0d0d)
    .setImage(captura);
  
    
   

    
user.addRole(rol).catch(console.error) &&
  
miembro.addRole(rol2).catch(console.error) &&
  
message.channel.send(embed).then(m => m.delete(20000));
  

    
 //reacciones.....................................................................................................................
  
/*

Reacciona a los mensajes generados por el bot
usando react().
*/
  
    
      }
  let peqll = ["puto el que lo lea"] 

if(peqll.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) {
 
   setTimeout(()=> {
  message.channel.send("Perdón, no traigo mis lentes puestos, ¿me pueden decir que dise ahí? ");
   },4000)
  
  
  }
    
    let peqll2 = ["puto el que lo lea"]
if(peqll2.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) {
 
   setTimeout(()=> {
  message.channel.send("No, tu noo Timii!! \ud83d\ude11 ");
       },15000)

 
 
    
  
    
 }
      let oulloo = ["mientras tanto"] 
if(oulloo.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 

const random = Math.floor(Math.random() * 100);
let heard = "";
 
    let elementos = [
      "https://3.bp.blogspot.com/-3e1g-ks6u6U/VruCuK4aZbI/AAAAAAAACvQ/iT7epOXSNgs/s1600/tuzki-10.gif"
    ];
    let captura = elementos[Math.floor(elementos.length * Math.random())];

    
            
const embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " ... ")
   
    .setImage(captura);
message.channel.send(embed);
    
  
  
  
  
  
  }
if(message.content.startsWith(prefix+'like')){
message.channel.send('Este mensaje merece un Like!')
.then(m => {
        message.react("\ud83d\udc4d"); // enviar el emoji por codigo

});
  
 }
      let likewords = ["dolor","exit","masoquis","sexi","director guapo","callate","asecin","patiar","rap","latigo","frifallero","frifayero","mongol"] 
if(likewords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 


        message.react("\ud83d\udc4d"); // enviar el emoji por codigo


   }
      let dislikewords = ["tarea"] 
if(dislikewords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 


        message.react("\ud83d\udc4e"); // enviar el emoji por codigo
  
  
  }
      let annoyingwords = ["director feo","jodase","pudrase","ballase a la","vallase a la","hijo de su"] 
if(annoyingwords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 


        message.react("\ud83d\udd95"); // enviar el emoji por codigo
  
  
  
    }
      let sadwords = ["triste","sad","murio","murió","suicidar","estres","estrés","gatito muerto"] 
if(sadwords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 


        message.react("\ud83d\ude22"); // enviar el emoji por codigo
  

  
   }
    let words = ["macias", "masias"] 
if(words.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
 message.delete();
 message.channel.send('no menciones ese nombre aquí, está prohivido')
  
  
  
  }
    let badwords = ["caca", "cacas"] 
if(badwords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
 
 message.channel.send('No digas eso aqui')
      
  
   }
    let dwords = ["@Director"] 
if(dwords.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  var rpts = ["que quieres Nigga", "..."];
message.channel.send(rpts[Math.floor(Math.random()*rpts.length)]+'');
  
  //comandos coma.....................................................................................................................
   
         
     }   
   /*green_apple*/
if (message.content.startsWith(prefix + "coma 🍏")) {
   message.channel.startTyping(1) 
   setTimeout(()=> { 
  message.channel.send("hu?, ¿una manzana?, ¿como supiste que me gustaban las verdes?, supongo que solo lo adivinaste.");
   },2000)
      message.channel.stopTyping(1) 
       

} /*apple*/
if (message.content.startsWith(prefix + "coma 🍎")) {
  message.channel.startTyping(1) 
   setTimeout(()=> { 
  message.channel.send("Te gusta seguir la tradición de dar una manzana a tus maestros e, pues bien, no soy muy fan de las manzanas rojas, pero iigual la hacepto.");
 },2000)
      message.channel.stopTyping(1) 


} /*pear*/
if (message.content.startsWith(prefix + "coma 🍐")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("una pera e?... ¿si saves que la tradición es una manzana sierto?");
    },2000)
      message.channel.stopTyping(1) 


} /*tangerine*/
if (message.content.startsWith(prefix + "coma 🍊")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("gracias, apuesto a que podria golpiar a alguien con esto, posiblemente a macias.... olle, que buena idea, la proxima vez traime una zandia quieres?");
   },2000)
      message.channel.stopTyping(1)

  
} /*lemon*/
if (message.content.startsWith(prefix + "coma 🍋")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("genial, esto vendrá perfecto para mi limonada sin azucar");
   },2000)
      message.channel.stopTyping(1)


}/*banana*/
if (message.content.startsWith(prefix + "coma 🍌")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("no se porqué me das eso, pero creo que no me bendría mal.");
    },2000)
      message.channel.stopTyping(1)


} /*watermelon*/
if (message.content.startsWith(prefix + "coma 🍉")) {
    message.channel.startTyping(1) 
   setTimeout(()=> {
       message.channel.send("geniaal!, ahora podré ponerla en una catapulta y lanzarla en la cabeza de Macias.");
      },2000)
      message.channel.stopTyping(1)


} /*grapes*/
if (message.content.startsWith(prefix + "coma 🍇")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("ya era hora, ahora velas poniendo en mi boca una por una mientras me echas aire con la otra mano.");
    },2000)
      message.channel.stopTyping(1)


} /*strawberry*/
if (message.content.startsWith(prefix + "coma 🍓")) {
  message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("las prefiero con crema, pero damela");
   },2000)
      message.channel.stopTyping(1)


} /*melon*/
if (message.content.startsWith(prefix + "coma 🍈")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("bueno... no es una sandia pero funcionará mejor que una naranja para lo que pienso utilisar esto.");
    },2000)
      message.channel.stopTyping(1)


} /*cherries*/
if (message.content.startsWith(prefix + "coma 🍒")) {
    message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("mm.. seresas");
   },2000)
      message.channel.stopTyping(1)


} /*peach*/
if (message.content.startsWith(prefix + "coma 🍑")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("esta manzana tiene pelos, traime otra");
     },2000)
      message.channel.stopTyping(1)


} /*:mango:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd6d")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("un mango para otro mango!");
      },2000)
      message.channel.stopTyping(1)


} /*pineapple*/
if (message.content.startsWith(prefix + "coma \ud83c\udf4d")) {
  message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("me llabaré eso, o, ¿si era para mi?, a... entonses no la quiero, no es divertido si no te obligo a que me la des.");
   },2000)
      message.channel.stopTyping(1)


}  /*pineapple alternative Licy*/
      let prefixL = ['Licy-coma \ud83c\udf4d','L-coma \ud83c\udf4d', 'l-coma \ud83c\udf4d', 'Esposa del director-coma \ud83c\udf4d', 'L_coma \ud83c\udf4d', 'l_coma \ud83c\udf4d']; 
if(prefixL.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) { 
  message.channel.startTyping() 
     setTimeout(()=> { 
message.channel.send("Y esa es una de las rasones por las que me casé con ella.");
 },5000)
      message.channel.stopTyping() 


       
    
    
    
    
    
    
    
    


} /*:coconut:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd65")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("genial, fingiré que estoy en la playa mientras bebo esto y despejarme de todo este estres");
     },2000)
      message.channel.stopTyping(1)


} /*:kiwi:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd5d")) {
    message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("¡Damelo!.");
       },2000)
      message.channel.stopTyping(1)


} /*tomato*/
if (message.content.startsWith(prefix + "coma \ud83c\udf45")) {
   message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("... ... ... ¿que?... o, ¿querías que tome eso?, bien, lo tomaré, pero no esperas que lo coma");
    },2000)
      message.channel.stopTyping(1)



} /*eggplant*/  
if (message.content.startsWith(prefix + "coma \ud83c\udf46")) {
     message.channel.startTyping(1) 
   setTimeout(()=> {
  message.channel.send("¿Y eso?... ... ...");
    },2000)
      message.channel.stopTyping(1)


  
} /*eggplant alternative*/  
if (message.content.startsWith(prefix + "coma \ud83c\udf46")) {
  message.channel.startTyping(2) 
     setTimeout(()=> {
  message.channel.send("¡Espera!, ¿no es el dia de la berenjena sierto?, ¡Timi!, corre ve y trae los preparatibos, decoraremos la casa para el dia de la berenjena. ");
  },3000)
message.channel.stopTyping(2)
   

} /*:avocado:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd51")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("guardaré esto para despúes.");
     },2000)
      message.channel.stopTyping(1)

} /*:broccoli:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd66")) {
    message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("coma brocolii!, tu no me dises que hacer, ¿quien te crees que eres?, ¿mi madre?");
   },2000)
      message.channel.stopTyping(1)


} /*:leafy_green:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd6c")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿que?, ¿estoy a dieta?, llebate eso y traeme comida de verdad");
     },2000)
      message.channel.stopTyping(1)


} /*:cucumber:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd52")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("no pensaba preparar churros locos, pero ya que me das esto se me antojaron unos.");
     },2000)
      message.channel.stopTyping(1)


} /*::hot_pepper::*/
if (message.content.startsWith(prefix + "coma \ud83c\udf36\ufe0f")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("me encanta el picante, cualquier tipo de dolor es plasentero y dejame decirte que el ardor de lengua es muy estimulante.");
       },2000)
      message.channel.stopTyping(1)


} /*:corn:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf3d")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("okey, damelo.");
       },2000)
      message.channel.stopTyping(1)


} /*:carrot:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd55")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("... -solo la toma y la muerde en cilencio- ...");
      },2000)
      message.channel.stopTyping(1)


} /*:onion:*/
if (message.content.startsWith(prefix + "coma \ud83e\uddc5")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("esta cosa me recuerda a ti, apesta y me hace llorar, jajaja. fue un chiste, riete!! \ud83d\ude21");
       },2000)
      message.channel.stopTyping(1)


} /*:garlic:*/
if (message.content.startsWith(prefix + "\ud83e\uddc4")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("110");
     },2000)
      message.channel.stopTyping(1)


} /*:potato:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd54")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("La vida es como una papa, fea y deforme, ¿crees que mi analogia no tiene sentido?, la vida tampoco lo tiene, acostumbrate.");
      },2000)
      message.channel.stopTyping(1)


} /*:sweet_potato:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf60")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿Esta cosa que?, cometela tu, ¿yo para que la quiero?");
    },2000)
      message.channel.stopTyping(1)


} /*:croissant:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd50")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("amm, amm, amm... Es curioso, nunca e podido pronunciar bien el nombre de esta cosa, como sea, da igual como se llame, solo seguiré comiendola.");
    },2000)
      message.channel.stopTyping(1)


} /*:bagel:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd6f")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("mmm... está bueno... digo.. . no creas que lo estoy disfrutando ni nada, solo lo digo por cortesía. mmm");
   },2000)
      message.channel.stopTyping(1)


} /*:bread:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf5e")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿si te diste cuenta de que este pan no tiene nada verdad?");
    },2000)
      message.channel.stopTyping(1)


} /*:french_bread:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd56")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("Que panesote");
   },2000)
      message.channel.stopTyping(1)


} /*:pretzel:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd68")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("creo que me llebaré un par de esos.");
   },2000)
      message.channel.stopTyping(1)


} /*:cheese:*/
if (message.content.startsWith(prefix + "coma \ud83e\uddc0")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("no soy amante del queso, pero está bien.");
      },2000)
      message.channel.stopTyping(1)


} /*:egg:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd5a")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("okey... esto es un poco raro... no se porque pusistes un huevo crudo en mi mano pero e visto cosas mas extrañas asi que no importa.");
      },2000)
      message.channel.stopTyping(1)


} /*:cooking:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf73")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿me... me trajistes el desayuno?, eso es tan amable de tu parte... deecho, lo es demaciado. Eso es tan sospechoso, voy a tirar esto,no confio en ti, no te ofendas,no es personal, yo no confio en nadie. ");
    },2000)
      message.channel.stopTyping(1)


} /*:pancakes:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd5e")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("Haceptaré comer tus pamkekes, pero me debes un favor después de esto.");
   },2000)
      message.channel.stopTyping(1)


} /*:waffle:*/
if (message.content.startsWith(prefix + "coma \ud83e\uddc7")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("mmm, ..mmm... -degustando-... a mi esposa le salen mejor que esto.");
    },2000)
      message.channel.stopTyping(1)


} /*:bacon:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd53")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("comida gratiis!!, es gratis no?, soy millonario, pero no te daré un sentabo por esto");
     },2000)
      message.channel.stopTyping(1)


} /*:cut_of_meat:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd69")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿Se ba hacer o no se ba Hacer?");
   },2000)
      message.channel.stopTyping(1)


} /*::poultry_leg:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf57")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿estás seguro de esto?, no me siento muy comodo comiendome a tu especie.");
   },2000)
      message.channel.stopTyping(1)


} /*:meat_on_bone:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf56")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("-lo come sin decir nada- ñam,ñam,ñam..");
      },2000)
      message.channel.stopTyping(1)


} /*:hotdog:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf2d")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("mmmm, La ultima vez que comí uno de estos fue aquella vez en la secundaria cuando contraaté a esos hotdokeros buenos para nada.");
     },2000)
      message.channel.stopTyping(1)


} /*:hamburger:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf54")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("sisis, dameladamela. mmmmm -la muerde y la saborea lentamente- si le cuentas a mi esposa sobre esto te mato.");
     },2000)
      message.channel.stopTyping(1)



} /*:fries:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf5f")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("adoro la comida chatarra, solo no le digas a mi esposa que estoy comiendo esto, ni a Timi,no es que sea chismoso ni nada pero... no save mentir. ");
     },2000)
      message.channel.stopTyping(1)



} /*:pizza:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf55")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("m,mmm,mmm, nada mal.");
   },2000)
      message.channel.stopTyping(1)


} /*:sandwich:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd6a")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("m, okey... -lo toma y lo come-");
    },2000)
      message.channel.stopTyping(1)


} /*:falafel:*/
if (message.content.startsWith(prefix + "coma \ud83e\uddc6")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("gracias, pero no gracias, no me gustan las porquerias");
  },2000)
      message.channel.stopTyping(1)
  
  
} /*:stuffed_flatbread:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd59")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("¿que cosa es esto?, lo probaré haver que tal.");
     },2000)
      message.channel.stopTyping(1)


} /*:taco:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf2e")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("las amburguesas no estánmal, pero la comida Mexicana siempre se lleba el primer lugar.");
     },2000)
      message.channel.stopTyping(1)


} /*:burrito:*/
  if (message.content.startsWith(prefix + "coma \ud83c\udf2f")) {
    message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("mmm, me lo deboro!");
      },2000)
      message.channel.stopTyping(1)
 
 
 } /*:salad:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd57")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("... ... ...  ¿que.. ¿que es esto?... esto no debería ser considerado como comida.");
},2000)
      message.channel.stopTyping(1)


} /*:shallow_pan_of_food:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd58")) {
    message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("No te pedí esto... pensaba tomarlo como una agreciçon pero... no parese ser algo malo. lo probaré y si me envenenas te mato. ");
  },2000)


} /*:canned_food:*/
if (message.content.startsWith(prefix + "coma \ud83e\udd6b")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("m?, okey.");
   },2000)


} /*:spaghetti:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf5d")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("-comienza a comer el spaghetti- fuuu,-suerbe- quedó bien, mis felicitaciones al chef.");
  },2000)


} /*:ramen:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf5c")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("-comiendo en silencio-");
   },2000)


} /*:stew:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf72")) {
     message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("... ... Me incomoda que seas tan amable, se siente muy extraño.");
   },2000)


} /*:curry:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf5b")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("\ud83d\ude11... -come en silencop mientras te obserba extraño-");
   },2000)


} /*:sushi:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf63")) {
   message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("no compraría sushi por mi cuenta, pero si es gratis no te lo rechaso.");
  },2000)


} /*:bento:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf71")) {
    message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("-lo toma y come en silencio-");
  },2000)


} /*:dumpling:*/
if (message.content.startsWith(prefix + "come \ud83e\udd5f")) {
    message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("no tengo hambre, quisas después");
 },2000)


} /*:fried_shrimp:*/
if (message.content.startsWith(prefix + "coma \ud83c\udf64")) {
  message.channel.startTyping(1) 
     setTimeout(()=> {
  message.channel.send("-lo toma y se lo come-");
},2000)


} /*:rice_ball:*/
if(message.content.startsWith(prefix + "come \ud83c\udf59")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿sesupone que solo por cambiarle la forma al arroz ya debe de saber diferente?");
  },2000)


} /*:rice:*/
if(message.content.startsWith(prefix + "come \ud83c\udf5a")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("arroz blanco, ¿porqué no me traes unos palillos para esto?, quiero sentirme chino por un momento.");
 },2000)


} /*:rice_cracker:*/
if(message.content.startsWith(prefix + "come \ud83c\udf58")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿que es esto?, lo voy a probar...");
 },2000)


} /*:fish_cake:*/
if(message.content.startsWith(prefix + "come \ud83c\udf65")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿saves que es esto?, pastel de pescado, dos cosas que yo no combinaría pero a alguien se le ocurrio conbinar. comeré un poco.");
 },2000)


} /*:fortune_cookie:*/
if(message.content.startsWith(prefix + "come \ud83e\udd60")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("o, una galleta de la fortuna!, no creo en la suerte pero me gusta ver que disen estas cosas.-la come-... mmm, veamos que dise mi suerte... ¿quien te dio la galleta se enamorará de ti?, aww, cosita, lo siento pero no puedo ser nada mas alla que tu amor platonico ¿entiendes?");
  },2000)


} /*:moon_cake:*/
if(message.content.startsWith(prefix + "come \ud83e\udd6e")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("esto es para mi?, m?, g...g... cof,cof,cof... a, olbidalo.");
   },2000)


} /*:oden:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf62")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("o, ñom,ñom,ñom..");
  },2000)


} /*:dango:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf61")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("ñom,ñom,ñomñom.");
 },2000)


} /*:shaved_ice:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf67")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("\ud83d\ude0b -come rapidamente-");
  },2000)


} /*:ice_cream:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf68")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¡elado!, lo comeré pero no creas que estoy agradecido ni nada.");
  },2000)


} /*:icecream:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf66")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-lo toma y lo lame-");
  },2000)


} /*:pie:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd67")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-lo toma y lo come en silencio-");
 },2000)


} /*:cupcake:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddc1")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("m, si...");
  },2000)


} /*:cake:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf70")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("okey...-lo toma y lo come-");
 },2000)


} /*:birthday:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf82")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿esto porque?,¿quien cumplió años?");
 },2000)


} /*:custard:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6e")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-saborea y degusta- um,um,mm,um..");
  },2000)


} /*:lollipop:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6d")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("ok -la toma y la introduse en su boca-");
  },2000)


} /*:candy:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6c")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("claro.");
  },2000)


} /*:chocolate_bar:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6b")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-te lo arrebata y lo abre presipitadamente-");
},2000)


} /*:popcorn:*/
if(message.content.startsWith(prefix + "come \ud83c\udf7f")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¡O, PALOMITAS!. -te las arrebata-");
 },2000)


} /*::doughnut:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf69")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("shh, comeré esto,pero tu no viste nada ¿está bien?");
  },2000)


} /*:cookie:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6a")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿eres una niña exploradora?, no quiero tus galletas, bueno si, ¿¿damelas?!, -te la arrebata-");
 },2000)


} /*:chestnut:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf30")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("a....jaa...");
 },2000)


} /*:peanuts:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd5c")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-lo rompe y come el contenido-");
 },2000)


} /*:honey_pot:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf6f")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("ya estoy listo para los hotcakes");
   },2000)


} /*:butter:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddc8")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("a,sii, ponla por ahí,  metela al refri para cuando la nesecite.");
 },2000)
  

} /*:milk:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd5b")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("glmp,glmp,glmp, haa, refrescante.");
   },2000)


} /*:baby_bottle:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7c")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿te estás burlando de mi?, ¿acaso quieres morir? 	\ud83d\ude21");
  },2000)


} /*:coffee:*/
if(message.content.startsWith(prefix + "coma \u2615")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("perfecto, justo lo que nesecitaba");
  },2000)


} /*:tea:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf75")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("usualmente tomo café, pero tambien disfruto de un buen té. ");
  },2000)


} /*:mate:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddc9")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-lo agarra y lo toma-mn,mn..");
  },2000)


} /*:cup_with_straw:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd64")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("refrescante.. haa.");
 },2000)


} /*:beverage_box:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddc3")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("juguito de kinder... -lo agarra y empieza a tomarselo-");
   },2000)


} /*:ice_cube:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddca")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("prefiero el hielo solo si se lo agrego a algo.");
 },2000)


} /*:sake:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf76")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-comienza a tomarselo-");
  },2000)


} /*:beer:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7a")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("o... No.. yo no tomo eso... me da asco su sabor.");
  },2000)


} /*:beers:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7b")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿quieres brindar conmigo?, tal vez sonará extraño, pero solo tomaré agua, tu puedes tomar lo que quieras, igual brindemos.");
 },2000)


} /*:champagne_glass:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd42")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿porque quieres brindar?, a, da igual, brindemos de todos modos, salud jaja.");
 },2000)


} /*:wine_glass:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf77")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-gira el dedo alrrededor de la copa e ignala profundamente- mmmm, haa. u, vino, eso está un poco mejor, aunque prefiero no tomar con regularidad");
 },2000)


} /*:tumbler_glass:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd43")){
       message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("-te lo basea ensima- Disculpa se me calló");
   },2000)
     
     
     } /*:champagne:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7e")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("Esta ba por ti Seledon");
  },2000)


} /*:spoon:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7e")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("las cucharas no se comen hijo");
    },2000)


} /*:fork_and_knife:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf74")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("amm.. Yo solo como comida");
    },2000)


} /*:fork_knife_plate:*/
if(message.content.startsWith(prefix + "coma \ud83c\udf7d\ufe0f")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("Este plato está bacío, no se si tengas mala bición.");
   },2000)


} /*:bowl_with_spoon:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd63")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("Esto está bacio, ¿es una broma de mal gusto o eres retrasado?");
   },2000)


} /*:takeout_box:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd61")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("ordené esto hace como media hora, no te daré propina.");
   },2000)

       
       
} /*:chopsticks:*/
if(message.content.startsWith(prefix + "coma \ud83e\udd62")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("los palillos solo funcionan si hay algo de comida que puedan agarrar");
   },2000)



} /*:salt:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddc2")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿este obsequio inesperado tiene algo que ver con supersticiones?");
     },2000)


} /*:bone:*/
if(message.content.startsWith(prefix + "coma \ud83e\uddb4")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("hijo de la gran...\ud83e\udd2c");
    },2000)


} /*:dog:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc36")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("No soy chino");
   },2000)


} /*:cat:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc31")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("No-Soy-Chi-Noo");
  },2000)


} /*:mouse:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc2d")){
  message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("¿quieres que te pateé la cara?");
    },2000)


} /*:cow:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc2d")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("me gusta la res, pero... sinseramente prefiero que me la den ya preparada.");
    },2000)


} /*:pig:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc2d")){
    message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("no me gusta mucho comer serdo, y menos si me lo das vivo ");
     },2000)


} /*:frog:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc2d")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("Estás fuera del club");
     },2000)


} /*:chicken:*/
if(message.content.startsWith(prefix + "coma \ud83d\udc2d")){
 message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send("solo lo como si está preparado");
     },2000)


} 
if(message.content.startsWith(prefix + "\ud83d\udc2d")){
   message.channel.startTyping(1) 
     setTimeout(()=> {
    message.channel.send(":ricr:");
  },2000)
  
  
  
  
      
/*

Regalale una galleta a un usuario mencionandolo,
incluye razón (opcional).
*/
 }
  if(message.content.startsWith(prefix+'galleta')){
let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

if(!user) return message.channel.send('Mencione a un usuario.');
    
if(!razon){
  razon ='Ninguno';

}
message.channel.send('**'+ user.username +',** tienes una 🍪 de **'+message.author.username+'**\n\n**Razón:** '+razon+'\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ 🍪'); 
      
    
    
     
  
     
       
   
         
  }
  
  
  let usuario = message.mentions.users.first();
  
  
     let feed = [usuario +"-come",usuario +" "+"-come"] 
   if(feed.some(p => message.content.toLowerCase().includes(p.toLowerCase()))) {  
  
const args = message.content.slice(0).length.trim().split(/ +/g);
let razon = args.slice(0).join(' ');
    
if(!razon)return message.channel.send('inserte un emogi de comida');
  
    
        let food = ["Klaus","nick","ale","x-23","dream","natsuki","yuri","sayori","monika","🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🧅","🧄","🥔","🍠"
             ,"🥐","🥯","🍞","🥖","🥨","🧀" ,"🥚","🍳","🥞","🧇","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🥪","🧆","🥙","🌮","🌯","🥗"
             ,"🥘","🥫","🍝","🍜", "🍲" ,"🍛", "🍣","🍱", "🥟" ,"🍤", "🍙","🍚", "🍘" ,"🍥", "🥠","🥮", "🍢" ,"🍡", "🍧","🍨", "🍦"
                ,"🥧", "🧁", "🍰" ,"🎂", "🍮","🍭", "🍬" ,"🍫", "🍿", "🍩" ,"🍪", "🌰","🥜", "🍯" ,"🧈", "🥛", "🍼" ,"☕", "🍵","🧉"
                , "🥤" ,"🧃 ", "🧊", "🍶" ,"🍺", "🍻","🥂", "🍷" ,"🥃", "🍸", "🍹" ,"🍾", "🥄","🍴", "🍽️" ,"🥣", "🥡","🥢", "🧂"] 
 
       
       
    if(food.some(p => message.content.toLowerCase().includes(p.toLowerCase()))){  

  
   message.channel.send( usuario.username +',resiviste un(a) '+razon+' de '+message.author.username+'\n\n\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ '+razon)}; 
 

  
  
    
    
    
  
   //hablar.....................................................................................................................
  
  
   } 
  if(message.content.startsWith(prefix + "cita")){
    let elementos = ['Maciaaaaaaaaaaas','Vienvenidos a Keveen city, el unico lugar en lel que la unica limitante es tu imaginación, vengan y disfruten del viaje.',
                     'Porque yo soy, el director','Ya me cansé de esperar a ser rescatado, ahora seré yo quien me rescate.','Odio las mamadas sentimentales','En la vida real los buenos no son los que ganan',
                     'Nunca te acostumbras a eso, pero aprendes a vivir con ello','El dia que mi hija se buelba una perra la voy a sacar afuera y la voy a amarrar en un arbol',
                     'No querer a nadie es lo menos egoista que puedes hacer por alguien', 'si igual voy a morir, pues entonses que sea vailando.',
                     'yo tambien fuy humano alguna vez', 'Me alegra mucho cuando no tengo que matar a alguien','no me gusta ver a la gente sufrir, pero ellos me lo piden a gritos',
                     'No odio a la gente feliz, odio a la gente mentirosa.','¿De donde está saliendo tanto pe***o?, señoras, ya dejen de traer a tanto imbecil al mundo.'];

let captura = elementos[Math.floor(elementos.length * Math.random())];

message.channel.send(captura);
  
    
    } 
  if(command === 'perdon'){
    let elementos = ['No, no te perdono','Eso lo deviste aver pensado antes, ya es muy tarde para enmendar tu error.','lo pensaré'];

let captura = elementos[Math.floor(elementos.length * Math.random())];

message.channel.send(captura);
    
    } 
  if(command === 'perdón'){
    let elementos = ['No, no te perdono','Eso lo deviste aver pensado antes, ya es muy tarde para enmendar tu error.','lo pensaré'];

let captura = elementos[Math.floor(elementos.length * Math.random())];

message.channel.send(captura);
    
  
     } 
  if(message.content.startsWith(prefix + "motivate")){
    let elementos = ['savez, nadie crelló en mi nunca, mi padre fue un imbecil, mis amigos... ¿cuales amigos?, jaja, pero savez una cosa, mirame, de una u de otra forma sigo con vida,y logré hacer todas aquellas cosas que dijieron que no haría, no nesecito su aprobación, no nesecito la aprobación de nadie, sigue aelante, y pase lo que pase, nunca te olvides de que la unica opinion que importa... es la tulla.','Vienvenidos a Keveen city, el unico lugar en lel que la unica limitante es tu imaginación, vengan y disfruten del viaje.',
                     'esta vida es una porqueria, lo se, pero te diré una cosa, aprende a disfrutar el dolor, si aprendes a disfrutar eso, siempre estarás bien de alguna forma, solo espero que tu cituación balla mejor, no te preocupez estarás bien',
                     'creo en ti, se que eres mas fuerte de lo que crees,aunque no lo creas yo alguna vez estube ahí, sovreviviras'];

let captura = elementos[Math.floor(elementos.length * Math.random())];

message.channel.send(captura);
  
  
     //menús de ayuda.....................................................................................................................
  
    
      }
  
  if(command === 'lasthelp' ){
  const embed = new Discord.RichEmbed() 
    .setTitle("TLC")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x0d0d0d)
 
    .setFooter("todos los comandos", client.user.avatarURL)
    .setTimestamp()
    .setURL("https://portalmybot.com/guia/mybot")
      
    .addField("presence", "setpresence.")
    
    .addField("saludos", "ping,hola,hola director,buenos dias,tardes,noches, bye, hasta mañana, saluda a,buebos dias,noches.")
    
   
    .addField("preguntas", "wh questions,yn questions.")
    
     .addField("interacción", "elogio, te quiero,quiere,cosquillas,palmada.")
        
     .addField("decir", "say,sayr,sayx,diga,delte,send,privown")
            
     .addField("auditoria", "user,avatar,invitechannel,invitebot,restart,kick,mute,warn,changenickname")
   
     .addField("eventos", "eval,botavatar,botname,addrole")
   
     .addField("entretenimiento", "flipcoin,love,newlove,randomuser,quest,anuncio,luegoloarreglo,reload,digame un numero,reverse,buscar,ppt,ppt2,ppt3,pescar,newpescar,coma,cita,perdon")
   
     .addField("gifs", "kiss,slap,hug,fatality,patada,kill")
     
     
    .addBlankField(true)
    
       message.channel.send(embed);

    
    
  
     }
  
  if(command === 'help' ){
  const embed = new Discord.RichEmbed() 
    .setTitle("Hola, soy el director, gracias por solicitar la guia")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x0d0d0d)
    .setDescription("Ruben con ayuda de muchas tazas de café, barias desbeladas y muuuuchaaa paciencia logró traerme a la vida y me iso este canal con el que puedo interactuar con ustedes.")
    .setFooter("Aqui les dejo mi lista de comandos sentral, diviertanse.", client.user.avatarURL)
    .setTimestamp()
    .setURL("https://portalmybot.com/guia/mybot")
      
    .addField("-Hola", "Usa esto para recibir un saludo.")
    .addField("-buenos dias,-buenas tardes,-buenas noches.", "Siempre es agradable recibir un mensaje como este cuando te lebantas/te bas a dormir.")
    .addField("-bye", "Usa esto para despedirte.")
    .addField("-salude a", "Usa esto para despedirte.")
    .addField("-preg", "si tienes una pregunta de si o no usa -preg, si tienes una pregunta abierta solo escribela directamente sin poner -preg, en todos los casos no olvides abrir y serrar signos de interrogación para reconoser la pregunta.")
    .addField("-guapo,-eres lindo,-eres hermoso,-eres muy hermoso, -eres bonito,-eres muy bonito.", "¿que?, es normal que quieras adularme, escucho ese tipo de cosas todo el tiempo.")
    .addField("-Te quiero", "No es de extrañar que muchos me quieran, asi que si tu eres uno de mis fans, eres libre de decirme que me quieres.")
    .addField("-te quiere", "Alguien en el servidor me quiere! Hasmelo saver usando este formato -te quiere +@nombre_del_usuario.")
    .addField("-privown", "Usa esto para que te escriba un mensage pribado")
    .addField("-send", "Usa esto para que le envie un mensaje pribado a alguien")
    .addField("-user,user @user", "Usa esto para ver tus estadisticas de usuario o las de alguienmas")
    .addField("-quest", "Usa esto para plantear una pregunta de si o no y que los miembros del chat respondan")
    .addField("-invitar", "Usa esto para generar un link de invitación al canal.")
    .addField("-Anuncio", "Usa esto para publicar un anuncio que quieres que los miembros vean.")
    .addField("-flipcoin", "Usa esto para pedirme que lanse una moneda")
    .addField("-love", "esto es para ver el porsentage de amor entre dos usuarios")
    .addField("-digame un numero", "Usa esto para pedirme que diga un numero del 1 al 100")
    .addField("-like", "esto es para que el director le dé apollo moral a tus comentarios")
    .addField("-coma","Usa esto para darme de comer cualquier comida disponible en la sección de comida de los emojis. Usa este formato -coma:emoji_de_comida:")
    .addField("-cita", "Usa esto para que diga una frase random que digo durante la historia")
    .addField("-perdon", "¿publicaste en el chat algo que pudo averme irritado?, eres libre de pedirme disculpas y tal vez reconsidere el no romperte las piernas.")
    .addField("-help", "Esta es mi guia personal, si nesecitas una lista de mas comandos disponibles de los demás miembros, puedes solicitarlo haciendo D-help")
    .addBlankField(true)
    .addField("Nota", "Cada dia seguimos trabajando para mejorar mi funcionamiento. si tienes sugerencias puedes dejarlo en la caja de sugerencias. y si es pocible iré mejorando.");
       message.channel.send(embed);
 

    
  }
  
  if(command === 'helpd' ){
    if(message.author.id !== '662420316156329985') return;
  const embed = new Discord.RichEmbed() 
    .setTitle("Hola, soy el director, gracias por solicitar la guia")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x0d0d0d)
    .setDescription("Ruben con ayuda de muchas tazas de café, barias desbeladas y muuuuchaaa paciencia logró traerme a la vida y me iso este canal con el que puedo interactuar con ustedes.")
    .setImage(message.author.avatarURL)
    .setFooter("Aqui les dejo mi lista de comandos sentral, diviertanse.", client.user.avatarURL)
    .setTimestamp()
    .setURL("https://portalmybot.com/guia/mybot")
      
    .addField("-Hola", "Usa esto para recibir un saludo.")
    .addField("-buenos dias,-buenas tardes,-buenas noches.", "Siempre es agradable recibir un mensaje como este cuando te lebantas/te bas a dormir.")
    .addField("-bye", "Usa esto para despedirte.")
    .addField("-salude a", "Usa esto para despedirte.")
    .addField("-preg", "si tienes una pregunta de si o no usa -preg, si tienes una pregunta abierta solo escribela directamente sin poner -preg, en todos los casos no olvides abrir y serrar signos de interrogación para reconoser la pregunta.")
    .addField("-guapo,-eres lindo,-eres hermoso,-eres muy hermoso, -eres bonito,-eres muy bonito.", "¿que?, es normal que quieras adularme, escucho ese tipo de cosas todo el tiempo.")
    .addField("-Te quiero", "No es de extrañar que muchos me quieran, asi que si tu eres uno de mis fans, eres libre de decirme que me quieres.")
    .addField("-te quiere", "Alguien en el servidor me quiere! Hasmelo saver usando este formato -te quiere +@nombre_del_usuario.")
    .addField("-cosquillas", "Usa esto para hacerme cosquillas")
    .addField("-palmada", "Usa esto para darme una palmada en la cabeza.")
    .addField("-abrazo", "usa esto para pedirme un abrazo.")
    .addField("-abraza a.", "Usa esto para pedirme que abrase a alguien del server.")
    .addField("-say", "Usa esto para hacerme decir algo")
    .addField("-privown", "Usa esto para que te escriba un mensage pribado")
    .addField("-send", "Usa esto para que le envie un mensaje pribado a alguien")
    .addField("-user,user @user", "Usa esto para ver tus estadisticas de usuario o las de alguienmas")
  message.channel.send(embed);

    

    
       }
  
   if(command === 'helpd' ){
     
     if(message.author.id !== '662420316156329985') return; 
  const embed = new Discord.RichEmbed() 
  
    .addField("-quest", "Usa esto para plantear una pregunta de si o no y que los miembros del chat respondan")
    .addField("-invitar", "Usa esto para generar un link de invitación al canal.")
    .addField("-Anuncio", "Usa esto para publicar un anuncio que quieres que los miembros vean.")
    .addField("-delte", "Usa esto para borrar sierto numero de mensages.")
    .addField("-diga", "Usa esto para pedirme que repita lo que dises")
    .addField("-kick", "esto es para expulsar a alguien del club.")
    .addField("-flipcoin", "Usa esto para pedirme que lanse una moneda")
    .addField("-love", "esto es para ver el porsentage de amor entre dos usuarios")
    .addField("-digame un numero", "Usa esto para pedirme que diga un numero del 1 al 100")
    .addField("-like", "esto es para que el director le dé apollo moral a tus comentarios")
    .addField("-coma","Usa esto para darme de comer cualquier comida disponible en la sección de comida de los emojis. Usa este formato -coma:emoji_de_comida:")
    .addField("-cita", "Usa esto para que diga una frase random que digo durante la historia")
    .addField("-perdon", "¿publicaste en el chat algo que pudo averme irritado?, eres libre de pedirme disculpas y tal vez reconsidere el no romperte las piernas.")
    .addField("-help", "Esta es mi guia personal, si nesecitas una lista de mas comandos disponibles de los demás miembros, puedes solicitarlo haciendo D-help")
    .addBlankField(true)
    .addField("Nota", "Cada dia seguimos trabajando para mejorar mi funcionamiento. si tienes sugerencias puedes dejarlo en la caja de sugerencias. y si es pocible iré mejorando.");
       message.channel.send(embed);
 

    
  }

  if(message.content.startsWith(prefix + 'general-help')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**estos son los posibles COMANDOS disponibles para todos los bots**\n```\n'+
                        '-> '+prefix+'-Hola         :: saludar'+
                        '-> '+prefix+'-buenos dias,-buenas tardes,-buenas noches. :: Muestra el avatar de un usuario.\n```\n\n'+
                        '-> '+prefix+'-bye          :: Hace que el bot diga un mensaje.\n```\n\n'+
                        '-> '+prefix+'-saluda a   :: Muestra información sobre un usuario mencioando.\n```\n\n'+
                        '-> '+prefix+'-preg         :: Muestra información de un servidor determinado.\n```\n\n'+
                        '-> '+prefix+'-guapo,-eres lindo,-eres hermoso,-eres muy hermoso, -eres bonito,-eres muy bonito.         :: El bot respondera a tus preguntas.\n```\n\n'+
                        '-> '+prefix+'-te quiero           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-te quiere @user           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-cosquillas   :: usa esto para hacerme \n```\n\n'+
                        '-> '+prefix+'-palmada  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-abrazo           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-abraza a @user         :: El bot respondera a tus preguntas.\n```\n\n'+
                        '-> '+prefix+'-say   :: Banear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-privown  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'send           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-user/-user @user         :: El bot respondera a tus preguntas.\n```\n\n'+
                      
                        '-> '+prefix+'-quest   :: Banear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-invitar  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'anuncio           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-luegoloarreglo        :: El bot respondera a tus preguntas.\n```\n\n'+
                        '-> '+prefix+'-delte   :: Banear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-di/diga  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'kick           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-flipcoin        :: El bot respondera a tus preguntas.\n```\n\n'+
                        '-> '+prefix+'-love   :: Banear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-di un numero/digame un numero   :: Banear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-like  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-come/-coma           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-cita  :: Patear a un usuario del servidor incluye razon.\n```\n\n'+
                        '-> '+prefix+'-perdón           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '-> '+prefix+'-help/general help        :: El bot respondera a tus preguntas.\n```\n\n'+
                        '-> '+prefix+'-comandos secretos-        :: El bot respondera a tus preguntas.\n```\n\n'+
                        
                        
                        '**MyBOT - Server guía y de soporte Únete :**\nhttps://discord.gg/VxwER6t');
    
  

    
    
    
    
    
}

  if(message.content.startsWith(prefix + 'helpdirect')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**COMANDOS**\n```\n'+
                        '-> '+prefix+'Director-Hola          :: saludar'+
                        '-> '+prefix+'Directo-come + icono de comida :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '**MyBOT - Server guía y de soporte Únete :**\nhttps://discord.gg/VxwER6t');
    
    
    
     //canales de sonido,audio.....................................................................................................................
  
    
    
    }
  if (message.content.startsWith(prefix + "join")) {
    let Canalvoz = message.member.voiceChannel;
 
    if (!Canalvoz || Canalvoz.type !== "voice") {
      message.channel
        .send("¡Necesitas unirte a un canal de voz primero!.")
        .catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
      message.channel.send("Ya estoy conectado en un canal de voz.");
    } else {
      message.channel
        .send("Conectando...")
        .then(m => {
          Canalvoz.join()
            .then(() => {
              m.edit(":white_check_mark: | Conectado exitosamente.").catch(
                error => message.channel.send(error)
              );
            })
            .catch(error => message.channel.send(error));
        })
        .catch(error => message.channel.send(error));
    }
  }
  if (message.content.startsWith(prefix + "leave")) {
    let Canalvoz = message.member.voiceChannel;
 
    if (!Canalvoz) {
      message.channel.send("No estoy en un canal de voz.");
    } else {
      message.channel
        .send("Dejando el canal de voz.")
        .then(() => {
          Canalvoz.leave();
        })
        .catch(error => message.channel.send(error));
      
        }
      
      
      
      
       
 
    
    
  
  {
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
    
   }  
    
  
    };  
  
});
;client.login(config.TOKEN);

