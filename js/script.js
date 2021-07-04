Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Fabio',
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'gabriele',
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Allora finto subito come sempre?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Quasi finito, tu come stai messo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Sei sempre il solito secchione BRAVOH, io in alto mare!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Tony',
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: "WE WE T'appost",
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: "Frate T'appost",
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: "Che dici finito l'esercizio",
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 16:25:10',
                            text: "Quasi!",
                            status: 'sent'
                        },
                    ],
                },
                
                {
                    name: 'Samuele',
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                }, 
            ],

            indexContacts:0,
            indexMessages:"",
            search: '',
            
        },
        computed: {
            filteredAndSorted(){
             // function to compare names
             function compare(a, b) {
               if (a.name < b.name) return -1;
               if (a.name > b.name) return 1;
               return 0;
             }
              
             return this.contacts.filter(user => {
                return user.name.toLowerCase().includes(this.search.toLowerCase())
             }).sort(compare)
            }
        },
        methods: {
            
            moveTo: function(index) {
                this.indexContacts = index;
            },
            contactMessage: function(index) {

                const status = this.contacts[this.indexContacts].messages[index].status
                    if (status === 'sent') {
                        return 'send';
                    }else {
                       return 'received';
                    }
            },
            getCurrentDateTime: function () {
              
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                
            },
            sendMessage: function () {
                
                this.contacts[this.indexContacts].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.indexMessages,
                    status: 'sent',
                });

                this.indexMessages = '';

                // dopo 1 secondo, pushare una riposta.
                setTimeout(() => {
                    this.contacts[this.indexContacts].messages.push({
                        date: this.getCurrentDateTime(),
                        text: "ok",
                        status: 'received',
                    });
                }, 1000);
            }    


        },
    }    
                
);


/*
{
                    name: 'Noemi',
                    avatar: "./img/avatar_io.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Sei operativa per un pò di codice?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma fa molto caldo non so quanto riesco!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:00:00',
                            text: "OK, dai proviamoci dobbiamo finire l'esercizio",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:05:00',
                            text: 'Tra 10 minuti ci vediamo su Zoom',
                            status: 'received'
                        },
                    ],
                },
*/


