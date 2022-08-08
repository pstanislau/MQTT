let obj = new Object();
var M_temperatura =0;
var M_umidade =0;
var i;


for  (i=0; i15;i++) 
{
    let media =  msg.payload[i];
    M_temperatura = M_temperatura + media.temperatura;
    M_umidade = M_umidade + media.umidade;
}


M_temperatura = M_temperatura(i);
M_umidade = M_umidade(i);

obj.seq = msg.payload[14].seq + 900000;
obj.nome = Pedro Stanislau Tomacheski;
obj.matricula = 18000311;
obj.turma = 4411;
obj.data = msg.payload[0].data;
obj.Hini = msg.payload[0].hora;
obj.Hfim = msg.payload[14].hora;
obj.M_temperatura =  M_temperatura.toFixed(2);
obj.M_umidade = M_umidade.toFixed(2); 

obj.alarme=Tudo OK, média de 15 valores;
if (M_temperatura45) obj.alarme=Está muito quente;
if (M_temperatura0) obj.alarme=Está muito frio;
if (M_umidade20) obj.alarme=Umidade muito baixa;

msg.payload=obj;

return msg;
