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
    imageurl: 'https://promotop.net/wp-content/uploads/2025/07/console-portatil-r36s-vale-a-pena-em-2025-analise-completa-do-videogame-retro-barato-1024x576.jpeg',
    link: '#',
    descricao: 'O campeão do custo-benefício. Este console é conhecido por sua excelente performance em sistemas de até N64 e PSP 2D, rodando o ArkOS para uma experiência customizável e acessível.'
}, {
    nome: 'Trimui Smart Pro',
    imageurl: 'https://criticalhits.com.br/wp-content/uploads/2024/04/trimui-smart-pro-02-1536x864.jpg',
    link: '#',
    descricao: 'Design elegante e compacto com foco na portabilidade. Ideal para quem busca emulação de qualidade até PS1 e GBA em um formato que cabe facilmente no bolso.'
},
{
    nome: 'XU10',
    imageurl: 'https://criticalhits.com.br/wp-content/uploads/2024/02/xu10-02.jpg',
    link: '#',
    descricao: 'Um dispositivo robusto e popular na comunidade. Oferece uma ótima tela e controles precisos, sendo uma excelente opção intermediária para consoles 8 e 16-bit, além de PS1.'
},{
    nome: 'RG505',
    imageurl: 'https://i.ytimg.com/vi/rxif_dr_9gE/maxresdefault.jpg',
    link: '#',
    descricao: 'Potência com tela OLED. Equipado com Android e um chip mais forte, ele é a escolha perfeita para quem quer levar a emulação a sério, incluindo Dreamcast, PSP e até mesmo alguns títulos de GameCube.'
},{
    nome: 'SUP GAME BOX',
    imageurl: 'https://m.media-amazon.com/images/I/61a2AvFEx0L._AC_UF1000,1000_QL80_.jpg',
    link: '#',
    descricao: 'A porta de entrada para a nostalgia. Este mini console é famoso por ser ultracompacto e vir com centenas de jogos do Nintendinho (NES) pré-instalados, perfeito para diversão instantânea.'
}]

function loaddata() {
    const romslist = document.querySelector('.roms-list');

    // LÓGICA DE ROMS (Cards minimalistas, 4 por linha, botões em coluna)
    roms.forEach(rom => {
        const isGdriveDisabled = rom.linkgdrive === '#';
        
        // Usei onclick="event.preventDefault()" nos links desabilitados (com link '#') para evitar que a página role para o topo.
        const romItem = document.createElement('div');
        romItem.classList.add('roms-list-item');
    
        romItem.innerHTML = `<h3>${rom.nome}</h3>
                         <div class="btn-area">
                             <a href="${rom.linkgdrive}" target="_blank" ${isGdriveDisabled ? 'onclick="event.preventDefault()"' : ''}>
                                <button class="gdrive" ${isGdriveDisabled ? 'disabled' : ''}>Google Drive</button>
                             </a>
                             <a href="${rom.linkmega}" target="_blank" onclick="event.preventDefault()">
                                <button class="mega" disabled>Mega</button>
                             </a>
                             <a href="${rom.linkmediafire}" target="_blank" onclick="event.preventDefault()">
                                <button class="mediafire" disabled>Mediafire</button>
                             </a>    
                         </div>`;

        romslist.appendChild(romItem);
    });

    const portateislist = document.querySelector('.portateis-list');

    // LÓGICA DE PORTÁTEIS (Efeito Flip Card)
    portateis.forEach(portatil => {
        const portateisItem = document.createElement('div');
        portateisItem.classList.add('flip-container');

        portateisItem.innerHTML = `
            <div class="flipper">
                <div class="portatil-card-front">
                    <img src="${portatil.imageurl}" alt="${portatil.nome}">
                    <h3>${portatil.nome}</h3>
                    <button class="btn-flip">Info &gt;</button>
                </div>

                <div class="portatil-card-back">
                    <h3>${portatil.nome}</h3>
                    <p class="portatil-descricao">${portatil.descricao}</p>
                    <button class="btn-flip back-btn">&lt; Voltar</button>
                </div>
            </div>
        `;

        portateislist.appendChild(portateisItem);
    }); 
    
    // Adiciona o evento de clique para o giro (após todos os cards serem carregados)
    document.querySelectorAll('.btn-flip').forEach(button => {
        button.addEventListener('click', function() {
            // Sobe até encontrar o elemento '.flip-container' e alterna a classe 'flipped'
            this.closest('.flip-container').classList.toggle('flipped');
        });
    });
}

// Chama a função para carregar os dados
loaddata();