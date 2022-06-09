## Proektna naloga po Praktikum II


## Tema: Vizualizacija in iskanje po zbirki „OPSI“

## Ekipa: Marko Mladenovič, Viktor Nankovski, Jan Mlakar


  Naredili smo spletna stran za iskanje skozi podatke povezane s CO2 odtisom vo Slovenije, prevzamene od spletna zbirka "OPSI".

    https://podatki.gov.si
    

## Strukturo proekta

  Za frontend proekta smo uporabili React js s komponenta Axios.

  Za backend smo uporabili Express.js.
 
  Podatke smo shranili vo MySQL databazo.
  

## Namestitev

  Ko prenesete spletno strano za zagon morate namestiti React js, Axios, Express.js in MySQL. To naredite s ukaze

    $ npm install react
  
    $ npm install react-axios
  
    $ npm install express
  
    $ npm install mysql
    
  Tudi morate shraniti sql databazo na vaš računalnik. SQL databaza s podatke je vo praktikum.json datoteka.
  
## Zagon
 
  Spletno stran zaženete preku 2 posebni terminale s ukaze:
    
    $node express.js 
    
    vo "backend" folderja, in
    
    $ npm start
    
    vo folder proekta.
