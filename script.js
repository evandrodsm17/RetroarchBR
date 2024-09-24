const roms = [{
    nome: 'Nintendo 64',
    imageurl: 'https://i.pinimg.com/474x/57/f9/af/57f9af664ef25e126f0e1739ad4ba170.jpg',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.google.com/file/d/1PIsYTwxJx7xrvLELPmAznfusxllkcC0w/view'
}, {
    nome: 'Super Nintendo',
    imageurl: 'https://www.pikpng.com/pngl/m/13-137827_sega-model-1602-1-ac-adapter-super-nintendo.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.google.com/file/d/1feZrSBPeBdhbORVPTdof7aWuihd9cGma/view?usp=drive_link'   
},{
    nome: 'Nintendinho',
    imageurl: 'https://turbologo.com/articles/wp-content/uploads/2019/11/Nintendo-logo.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.google.com/file/d/1VlOdDimVfca-YubEyJrSQwzJ8ocU9AlE/view'   
},{
    nome: 'Sega Dreamcast',
    imageurl: 'https://i.pinimg.com/564x/09/7d/bc/097dbc0eef44e584954fc8b6c4db1726.jpg',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'    
}, {
    nome: 'Playstation One',
    imageurl: 'https://logospng.org/download/playstation-1/ps1-playstation-1-2048.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.usercontent.google.com/download?id=1_Ok1o1dD-G_0i7M0y1vm3yMib94crpt_&export=download&authuser=0'
},{
    nome: 'Playstation Portable - PSP',
    imageurl: 'https://i.pinimg.com/564x/9c/9e/6e/9c9e6ed41fddc8bb04c4a9049dce74ea.jpg',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'   
},{
    nome: 'Nintendo DS',
    imageurl: 'https://i.pinimg.com/474x/cf/f4/ba/cff4ba07c6d0348a4e4871be9adc437f.jpg',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'   
},{
    nome: 'Mega Drive',
    imageurl: 'https://www.vhv.rs/dpng/d/33-337098_mega-drive-sega-logo-hd-png-download.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.google.com/file/d/1EZTfdXscf-zeykhCPYR3p12WxfcXdvNr/view'   
},{
    nome: 'Game Boy Advance',
    imageurl: 'https://toppng.com/uploads/preview/source-nintendo-game-boy-advance-logo-115629163465s1fttrycr.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: 'https://drive.google.com/file/d/1Mkh2hOdrp5tW6nUqGnNMhq9fFn661W9d/view'   
},{
    nome: 'Sega Saturn',
    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/SEGA_Saturn_logo.png/1200px-SEGA_Saturn_logo.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'   
},{
    nome: 'Mame',
    imageurl: 'https://e1.pngegg.com/pngimages/22/403/png-clipart-gloss-dock-icons-emulator-mame-mame-logo-thumbnail.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'   
},{
    nome: 'Atari',
    imageurl: 'https://w7.pngwing.com/pngs/831/124/png-transparent-atari-2600-video-game-atari-lynx-atari-8-bit-family-atari-logo-text-logo-arcade-game-thumbnail.png',
    linkmediafire: '#',
    linkmega: '#',
    linkgdrive: '#'   
}];

const portateis = [{
    nome: 'R36S',
    imageurl: 'https://www.lendagames.com/wp-content/uploads/2024/05/ASSET-R36S-BANNER.jpg',
    link: '#'
}, {
    nome: 'Trimui Smart Pro',
    imageurl: 'https://criticalhits.com.br/wp-content/uploads/2024/04/trimui-smart-pro-02-1536x864.jpg',
    link: '#'
},
{
    nome: 'XU10',
    imageurl: 'https://i.ebayimg.com/thumbs/images/g/xjAAAOSwk~9mZKeW/s-l1200.jpg',
    link: '#'
},{
    nome: 'RG505',
    imageurl: 'https://img.olx.com.br/images/62/627486569393500.jpg',
    link: '#'
}]

function loaddata() {
    const romslist = document.querySelector('.roms-list');

    roms.forEach(rom => {
        const romItem = document.createElement('div');
        romItem.classList.add('roms-list-item');
    
        romItem.innerHTML = `<h3>${rom.nome}</h3>
                        <img src="${rom.imageurl}" alt="${rom.nome}">
                        <div class="btn-area">
                            <a href="${rom.linkmediafire}" target="_blank"><button class="mediafire" disabled>Mediafire</button></a>    
                            <a href="${rom.linkgdrive}" target="_blank"><button class="gdrive" id="link-gdrive">Google Drive</button></a>
                            <a href="${rom.linkmega}" target="_blank"><button class="mega" id="link-mega" disabled>Mega</button></a>
                        </div>`

        romslist.appendChild(romItem);

    });

    const portateislist = document.querySelector('.portateis-list');

    portateis.forEach(portatil => {
        const portateisItem = document.createElement('div');
        portateisItem.classList.add('portateis-item');

        portateisItem.innerHTML = `
                    <img src="${portatil.imageurl}" alt="${portatil.nome}">
                    <a href="${portatil.link}"><button class="btn-review" disabled>${portatil.nome}</button></a>
        `

        portateislist.appendChild(portateisItem);

    });    
    
}

loaddata();