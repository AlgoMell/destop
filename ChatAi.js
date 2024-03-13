'use strict';
class ChatAI {

    constructor(options) {
        let defaults = {
            api_key: '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',
            source: 'openai',
            model: 'gpt-3.5-turbo',
            conversations: [],
            selected_conversation: null,
            container: '.chat-ai',
            chat_speed: 30,
            title: 'Untitled',
            max_tokens: 1000,
            version: '',
            show_tokens: false,
            available_models: ['gpt-4', 'gpt-4-0613', 'gpt-4-32k', 'gpt-4-32k-0613', 'gpt-3.5-turbo', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-16k-0613']
        };
        this.options = Object.assign(defaults, options);
        this.options.container = document.querySelector(this.options.container);
        this.options.container.innerHTML = `
            ${this._sidebar()}
            <main class="content">
                ${this._welcomePage()}
                ${this._MessageForm()}
            </main>
        `;
        this._eventHandlers();
        this.container.querySelector('.message-form input').focus();
    }

    
    _MessageForm() {
        return `
    <form class="message-form">
        <input type="text" placeholder="Type a message..." required>
        <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
    </form>

        `;

    }
    


    async getMessage(input) {
        try {
             // Define variables for the links
        const hospitalLink = '<a href="https://www.google.com/maps/search/hospitals/@currentlocation" target="_blank">here</a>.';
        const pharmacyLink = 'https://www.google.com/maps/search/pharmacy/@currentlocation';
        const ambulanceLink = 'https://www.example.com/book-ambulance';

        // Construct response messages using the links
        const hospitalResponse = `You can find nearby hospitals ${hospitalLink}`;
        const pharmacyResponse = `You can find nearby pharmacies <a href="${pharmacyLink}" target="_blank">here</a>.`;
        const appointmentResponse = "To schedule an appointment, please contact your healthcare provider directly.";
        const ambulanceResponse = `You can book an ambulance <a href="${ambulanceLink}" target="_blank">here</a>.`;

        // Determine which response to display based on user input
        if (input.toLowerCase().includes('nearby hospitals')) {
            this.displayAssistantMessage(hospitalResponse);
        } else if (input.toLowerCase().includes('find nearby pharmacy')) {
            this.displayAssistantMessage(pharmacyResponse);
        } else if (input.toLowerCase().includes('schedule an appointment')) {
            this.displayAssistantMessage(appointmentResponse);
        } else if (input.toLowerCase().includes('book ambulance')) {
            this.displayAssistantMessage(ambulanceResponse);
        }else if (input.toLowerCase().includes('medical queries')) {
                // Prompt for medical queries
                const promptResponse = "If you have any medical queries, feel free to ask. Common topics include symptoms, treatments, and preventive measures.";
                this.displayAssistantMessage(promptResponse);
            } else if (input.toLowerCase().includes('first aid')) {
                // Provide first aid information
                const firstAidResponse = "If you're in need of first aid, here are some general guidelines:\n1. For minor cuts and scrapes, wash the wound with soap and water, apply an antiseptic, and cover with a sterile bandage.\n2. For burns, run cool water over the affected area for at least 10 minutes and cover with a clean, dry cloth.\n3. In case of choking, perform the Heimlich maneuver or back blows if the person is conscious and coughing.\n4. If someone is unconscious but breathing, place them in the recovery position.\nRemember, these are general guidelines. For serious injuries or emergencies, seek immediate medical help.";
                this.displayAssistantMessage(firstAidResponse);
            } else if (input.toLowerCase().includes('medical conditions')) {
                // Provide information about common medical conditions
                const medicalConditionsResponse = "Common medical conditions include hypertension, diabetes, asthma, arthritis, and heart disease. Each condition requires proper management and treatment under the supervision of a healthcare professional.";
                this.displayAssistantMessage(medicalConditionsResponse);
            } else if (input.toLowerCase().includes('medication')) {
                // Provide information about medications
                const medicationResponse = "Medications play a crucial role in managing various health conditions. It's important to take medications as prescribed by your healthcare provider and to be aware of potential side effects and interactions.";
                this.displayAssistantMessage(medicationResponse);
            } else if (input.toLowerCase().includes('healthy lifestyle')) {
                // Provide tips for maintaining a healthy lifestyle
                const lifestyleResponse = "Maintaining a healthy lifestyle is essential for overall well-being. This includes eating a balanced diet, engaging in regular physical activity, getting enough sleep, managing stress, and avoiding harmful habits such as smoking and excessive alcohol consumption.";
                this.displayAssistantMessage(lifestyleResponse);
            } else if (input.toLowerCase().includes('emergency contact')) {
                // Provide information about emergency contacts
                const emergencyResponse = "Having emergency contacts readily available is crucial in case of an emergency. Make sure to have contact information for local emergency services, your primary healthcare provider, and trusted family members or friends.";
                this.displayAssistantMessage(emergencyResponse);
            } else if (input.toLowerCase().includes('mental health')) {
                // Provide information about mental health
                const mentalHealthResponse = "Mental health is as important as physical health. If you're struggling with mental health issues such as depression, anxiety, or stress, don't hesitate to seek help from a mental health professional. There are resources available to support you.";
                this.displayAssistantMessage(mentalHealthResponse);
            } else if (input.toLowerCase().includes('nutrition')) {
                // Provide information about nutrition
                const nutritionResponse = "Eating a nutritious diet is essential for overall health and well-being. Focus on consuming a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugary beverages, and excessive salt intake.";
                this.displayAssistantMessage(nutritionResponse);
            } else if (input.toLowerCase().includes('exercise')) {
                // Provide information about exercise
                const exerciseResponse = "Regular exercise is key to maintaining good health. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity each week, along with muscle-strengthening activities on two or more days a week.";
                this.displayAssistantMessage(exerciseResponse);
            } else if (input.toLowerCase().includes('vaccination')) {
                // Provide information about vaccination
                const vaccinationResponse = "Vaccination is a critical tool in preventing the spread of infectious diseases. Make sure you and your family are up-to-date with recommended vaccinations according to guidelines provided by healthcare authorities.";
                this.displayAssistantMessage(vaccinationResponse);
            } else if (input.toLowerCase().includes('health screenings')) {
                // Provide information about health screenings
                const screeningsResponse = "Regular health screenings can help detect potential health problems early when they're easier to treat. Talk to your healthcare provider about recommended screenings based on your age, gender, and family history.";
                this.displayAssistantMessage(screeningsResponse);
            } else if (input.toLowerCase().includes('self-care')) {
                // Provide tips for self-care
                const selfCareResponse = "Self-care involves taking deliberate actions to prioritize your physical, mental, and emotional well-being. This can include activities like practicing mindfulness, setting boundaries, engaging in hobbies, and seeking support when needed.";
                this.displayAssistantMessage(selfCareResponse);
            } else if (input.toLowerCase().includes('nutrition')) {
                // Provide information about nutrition
                const nutritionResponse = "Eating a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats is essential for maintaining good health. Make sure to stay hydrated and avoid excessive consumption of processed foods, sugary snacks, and drinks.";
                this.displayAssistantMessage(nutritionResponse);
            } else if (input.toLowerCase().includes('sleep')) {
                // Provide information about sleep
                const sleepResponse = "Getting enough quality sleep is vital for overall health and well-being. Aim for 7-9 hours of sleep per night and establish a consistent sleep schedule. Practice good sleep hygiene by creating a relaxing bedtime routine and maintaining a comfortable sleep environment.";
                this.displayAssistantMessage(sleepResponse);
            } else if (input.toLowerCase().includes('exercise')) {
                // Provide information about exercise
                const exerciseResponse = "Regular physical activity is crucial for maintaining good health. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with muscle-strengthening activities on two or more days a week.";
                this.displayAssistantMessage(exerciseResponse);
            } else if (input.toLowerCase().includes('stress management')) {
                // Provide tips for stress management
                const stressResponse = "Stress is a normal part of life, but excessive stress can negatively impact your health. Practice stress management techniques such as deep breathing, meditation, yoga, and spending time in nature to help reduce stress levels.";
                this.displayAssistantMessage(stressResponse);
            } else {
                // If the input doesn't match any predefined medical queries, proceed with regular chat processing
                const messages = [{ role: 'system', content: 'You are a medical doctor called Eir whoes pupose is too save lives .' }, ...this.selectedConversation.messages].map(message => ({ role: message.role, content: message.content }));
    
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    cache: 'no-cache',
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer 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',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        'messages': messages,
                        'max_tokens': this.maxTokens
                    })
                });
    
                const data = await response.json();
    
                if (data.error) {
                    this.showErrorMessage(data.error.message);
                    return;
                }
    
                const assistantMessage = data.choices?.[0]?.message?.content;
                if (!assistantMessage) {
                    console.error('Assistant message not found.');
                    return;
                }
    
                this.displayAssistantMessage(assistantMessage);
    
                const seriousnessCategory = await this.getSeriousnessCategory(input);
                this.handleSeriousnessCategory(seriousnessCategory);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }
    
    
    displayAssistantMessage(message) {
        const messageElement = this.container.querySelector('.message.assistant.active .text');
        if (!messageElement) {
            console.error('Message element not found.');
            return;
        }
    
        let msg = message;
        let textInterval = setInterval(() => {
            if (msg[0]) {
                messageElement.innerHTML += msg[0];
                messageElement.innerHTML = messageElement.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>');
                msg = msg.substring(1);
            } else {
                clearInterval(textInterval);
                messageElement.innerHTML = messageElement.innerHTML.replace(/```(.*?)```/, "<pre><code>$1" + "<" + "/code>" + "<" + "/pre>");
                if (this.options.show_tokens) {
                    messageElement.innerHTML += '<div><span class="tokens">' + (data.usage ? data.usage.total_tokens : '') + ' Tokens</span></div>';
                }
                this.container.querySelector('.message-form input').disabled = false;
                this.container.querySelector('.message.assistant.active').classList.remove('active');
            }
    
            this.container.querySelector('.content .messages').scrollTop = this.container.querySelector('.content .messages').scrollHeight;
        }, this.options.chat_speed);
    }
    
    


    async saveJsonToFile(jsonObject) {
        try {
            let options = {
                suggestedName: 'ai-conversations.json',
                types: [{
                    description: 'JSON Files',
                    accept: { 'application/json': ['.json'] }
                }]
            };
            let handle = await window.showSaveFilePicker(options);
            let writable = await handle.createWritable();
            let jsonString = JSON.stringify(jsonObject, null, 2);
            await writable.write(jsonString);
            await writable.close();
            this.options.title = handle.name;
            this.updateTitle(false);
            this.showSuccessMessage('File saved successfully.');
        } catch (error) {
            if (error.code !== DOMException.ABORT_ERR) {
                console.error('Error saving JSON file:', error);
                this.showErrorMessage(error.message);
            }
        }
    }


    formatElapsedTime(dateString) {
        let date = new Date(dateString);
        let now = new Date();
        let elapsed = now - date;
        let seconds = Math.floor(elapsed / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        if (days > 1) {
            return `${days} days ago`;
        } else if (days === 1) {
            return 'Yesterday';
        } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `${seconds} seconds ago`;
        }
    }

    loadConversation(obj) {
        this.clearWelcomeScreen();
        this.clearMessages();
        this.container.querySelector('.content .messages').insertAdjacentHTML('afterbegin', `
            <div class="conversation-title">
                <h2><span class="text">${obj.name}</span><i class="fa-solid fa-pencil edit"></i><i class="fa-solid fa-trash delete"></i></h2>
            </div>
        `);
        this._conversationTitleClickHandler();
        obj.messages.forEach(message => {
            this.container.querySelector('.content .messages').insertAdjacentHTML('afterbegin', `
                <div class="message ${message.role}">
                    <div class="wrapper">
                        <div class="avatar">${message.role == 'assistant' ? 'AI' : '<i class="fa-solid fa-user"></i>'}</div>
                        <div class="details">
                            <div class="date" title="${message.date}">${this.formatElapsedTime(message.date)}</div>
                            <div class="text">
                                ${message.content.replace(/(?:\r\n|\r|\n)/g, '<br>').replace(/```(.*?)```/, "<pre><code>$1" + "<" + "/code>" + "<" + "/pre>")}
                                ${this.options.show_tokens && message.total_tokens ? '<div><span class="tokens">' + message.total_tokens + ' Tokens</span></div>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

   
    clearWelcomeScreen() {
        if (this.container.querySelector('.content .welcome')) {
            this.container.querySelector('.content .welcome').remove();
            this.container.querySelector('.content').insertAdjacentHTML('afterbegin', '<div class="messages"></div>');
            return true;
        }
        return false;
    }

    clearMessages() {
        if (this.container.querySelector('.content .messages')) {
            this.container.querySelector('.content .messages').innerHTML = '';
            return true;
        }
        return false;
    }

    createNewConversation(title = null) {  
        title = title != null ? title : 'Case' + (this.conversations.length + 1);
        let index = this.conversations.push({ name: title, messages: [] });
        this.container.querySelectorAll('.conversations .list a').forEach(c => c.classList.remove('selected'));
        this.container.querySelector('.conversations .list').insertAdjacentHTML('beforeend', `<a class="conversation selected" href="#" data-id="${index - 1}" title="${title}"><i class="fa-regular fa-message"></i>${title}</a>`);
        this.clearWelcomeScreen();
        this.clearMessages();
        this._conversationClickHandlers();
        this.container.querySelector('.content .messages').innerHTML = '<div class="conversation-title"><h2><span class="text">' + title + '</span><i class="fa-solid fa-pencil edit"></i><i class="fa-solid fa-trash delete"></i></h2></div>';
        this._conversationTitleClickHandler();
        this.container.querySelector('.message-form input').focus();
        this.updateTitle();
        return index - 1;
    }

    updateTitle(unsaved = true) {
        document.title = unsaved ? '* ' + this.options.title.replace('* ', '') : this.options.title.replace('* ', '');
    }

    modal(options) {
        let element;
        if (document.querySelector(options.element)) {
            element = document.querySelector(options.element);
        } else if (options.modalTemplate) {
            document.body.insertAdjacentHTML('beforeend', options.modalTemplate());
            element = document.body.lastElementChild;
        }
        options.element = element;
        options.open = obj => {
            element.style.display = 'flex';
            element.getBoundingClientRect();
            element.classList.add('open');
            if (options.onOpen) options.onOpen(obj);
        };
        options.close = obj => {
            if (options.onClose) {
                let returnCloseValue = options.onClose(obj);
                if (returnCloseValue !== false) {
                    element.style.display = 'none';
                    element.classList.remove('open');
                    element.remove();
                }
            } else {
                element.style.display = 'none';
                element.classList.remove('open');
                element.remove();
            }
        };
        if (options.state == 'close') {
            options.close({ source: element, button: null });
        } else if (options.state == 'open') {
            options.open({ source: element }); 
        }
        element.querySelectorAll('.modal-close').forEach(e => {
            e.onclick = event => {
                event.preventDefault();
                options.close({ source: element, button: e });
            };
        });
        return options;
    }



    _welcomePage() {
        return `

        
        <div class="welcome">
        <h1>
            <img src="C:\\Users\\cyphr\\Downloads\\doctor-icon-png-66 (1).png" class="img">
        </h1>                   
        <h2> I'm Eir your medical assistant, how can I help you today?</h2>
        <div class="suggestions">
        <a href="https://www.google.com/maps/search/hospitals/@currentlocation" target="_blank" class="suggestion">
        <button class="suggestion"><i class="fas fa-hospital"></i>Find Nearby Hospitals</button>
      </a>
      <a href="https://www.google.com/maps/search/pharmacy/@currentlocation" target="_blank" class="suggestion">
        <button class="suggestion"><i class="fas fa-pills"></i>Find Nearby Pharmacy</button>
      </a>
      
      
        </div>
    </div>
    

        `;

    }
    
    
    _sidebar() {
        return `
            
        
        <nav class="conversations">
            <button class="new-conversation" onclick="showFloatingWindow()">
                <img class="image" src="C:\\Users\\cyphr\\Downloads\\imagei.png"> Cases
            </button>
            <div class="list"></div>
            <div class="footer">
                <div class="settings">
                    <link class="explore" onclick="showFloatingWindow()"><i class="fas fa-cog"></i></link>
                </div>  
            </div>
        </nav>
        
        <!-- Floating window content -->
        <div id="floating-window">
            <h2>Actions</h2>
            <button onclick="login()">Login</button>
            <button onclick="signup()">Sign Up</button>
            <button onclick="logout()">Logout</button>
        </div>
        
        <script>
            // Function to show the floating window
            function showFloatingWindow() {
                document.getElementById('floating-window').style.display = 'block';
            }
        
            // Dummy functions for login, signup, and logout
            function login() {
                alert('Login button clicked!');
            }
        
            function signup() {
                alert('Signup button clicked!');
            }
        
            function logout() {
                alert('Logout button clicked!');
            }
        </script>
        `;
    }

    _floatingWindow() {
        return `
            <!-- Floating window content -->
            <div id="floating-window" style="display: none;">
                <h2>Actions</h2>
                <button onclick="this.login()">Login</button>
                <button onclick="this.signup()">Sign Up</button>
                <button onclick="this.logout()">Logout</button>
            </div>
        `;
    }

    showFloatingWindow() {
        document.getElementById('floating-window').style.display = 'block';
    }

    _conversationClickHandlers() {
        this.container.querySelectorAll('.conversations .list a').forEach(conversation => {
            conversation.onclick = event => {
                event.preventDefault();
                this.container.querySelectorAll('.conversations .list a').forEach(c => c.classList.remove('selected'));
                conversation.classList.add('selected');
                this.selectedConversationIndex = conversation.dataset.id;
                this.loadConversation(this.selectedConversation);
                this.container.querySelector('.content .messages').scrollTop = this.container.querySelector('.content .messages').scrollHeight;
            };
        });
    }

    _conversationTitleClickHandler() {
        this.container.querySelector('.conversation-title i.edit').onclick = () => {
            this.container.querySelector('.conversation-title .text').contentEditable = true;
            this.container.querySelector('.conversation-title .text').focus();
            let update = () => {
                this.container.querySelector('.conversation-title .text').contentEditable = false;
                this.selectedConversation.name = this.container.querySelector('.conversation-title .text').innerText;
                this.container.querySelector('.conversation-title .text').blur();
                this.container.querySelector('.conversations .list a[data-id="' + this.selectedConversationIndex + '"]').innerHTML = '<i class="fa-regular fa-message"></i>' + this.selectedConversation.name;
                this.container.querySelector('.conversations .list a[data-id="' + this.selectedConversationIndex + '"]').title = this.selectedConversation.name;
                this.updateTitle();
            };
            this.container.querySelector('.conversation-title .text').onblur = () => update();
            this.container.querySelector('.conversation-title .text').onkeydown = event => {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    update();
                }
            };
        };
        this.container.querySelector('.conversation-title i.delete').onclick = () => {
            if (confirm('Are you sure you want to delete this Case?')) {
                this.conversations.splice(this.selectedConversationIndex, 1);
                this.selectedConversation = [];
                this.selectedConversationIndex = null;
                this.container.querySelector('.content').innerHTML = '';
                this.container.querySelector('.conversations .list .conversation.selected').remove();
                this.updateTitle();
                if (!this.container.querySelector('.content .welcome')) {
                    this.container.querySelector('.content').insertAdjacentHTML('afterbegin', this._welcomePage());
                    this.container.querySelector('.content').insertAdjacentHTML('beforeend', this._MessageForm());
                }
                this._openDatabaseEventHandlers();
            }
        };
        
    }

    _openDatabaseEventHandlers() {
        this.container.querySelectorAll('.open-database').forEach(button => {
            button.onclick = event => {
                event.preventDefault();
                if (document.title.startsWith('*') && !confirm('You have unsaved changes. Continue without saving?')) {
                    return;
                }
                this.getMedicalData().then(json => {
                    if (json !== undefined) {
                        if (this.container.querySelector('.content .messages')) {
                            this.container.querySelector('.content .messages').remove();
                        }
                        if (!this.container.querySelector('.content .welcome')) {
                            this.container.querySelector('.content').insertAdjacentHTML('afterbegin', this._welcomePage() , this._MessageForm());
                        }
                        this.container.querySelector('.conversations .list').innerHTML = '';
                        this.selectedConversation = [];
                        this.selectedConversationIndex = null;
                        this.conversations = json.content;
                        document.title = json.name;
                        this.options.title = json.name;
                        this.conversations.forEach((conversation, index) => {
                            this.container.querySelector('.conversations .list').insertAdjacentHTML('beforeend', `<a class="conversation" href="#" data-id="${index}" title="${conversation.name}"><i class="fa-regular fa-message"></i>${conversation.name}</a>`);
                        });
                        this._conversationClickHandlers();
                        this._openDatabaseEventHandlers();
                    }
                });
            };
        });
    }


    _eventHandlers() {
        this.container.querySelector('.message-form').onsubmit = event => {
            event.preventDefault();
            this.clearWelcomeScreen();
            if (this.selectedConversation === undefined) {
                this.selectedConversationIndex = this.createNewConversation();
            }
            let date = new Date();
            this.selectedConversation.messages.push({
                role: 'user',
                content: this.container.querySelector('.message-form input').value,
                date: date
            });
            this.container.querySelector('.messages').insertAdjacentHTML('afterbegin', `
                <div class="message assistant active">
                    <div class="wrapper">
                        <div class="avatar">Eir</div>
                        <div class="details">
                            <div class="date" data-date="${date}" title="${date}">just now</div>
                            <div class="text"><span class="blink"></span></div>
                        </div>
                    </div>
                </div>
                <div class="message user">
                    <div class="wrapper">
                        <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        <div class="details">
                            <div class="date" data-date="${date}" title="${date}">just now</div>
                            <div class="text">${this.container.querySelector('.message-form input').value}</div>
                        </div>
                    </div>
                </div>
                
            `);
            this.container.querySelector('.message-form input').disabled = true;
            this.getMessage(this.container.querySelector('.message-form input').value);
            this.container.querySelector('.message-form input').value = '';
            this.updateTitle();
        };
        window.addEventListener('keydown', event => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
                this.saveJsonToFile(this.conversations);
            }
        });
        window.addEventListener('beforeunload', event => {
            if (document.title.startsWith('*') && !confirm('You have unsaved changes. Are you sure you want to leave?')) {
                event.preventDefault();
                event.returnValue = '';
            }
        });
        this.container.querySelector('.conversations .new-conversation').onclick = event => {
            event.preventDefault();
            this.selectedConversationIndex = this.createNewConversation();
        };
        this.container.querySelector('.open-sidebar').onclick = event => {
            event.preventDefault();
            this.container.querySelector('.conversations').style.display = 'flex';
            this.container.querySelector('.open-sidebar').style.display = 'none';
            localStorage.setItem('sidebar', 'open');
        };
        this.container.querySelector('.close-sidebar').onclick = event => {
            event.preventDefault();
            this.container.querySelector('.conversations').style.display = 'none';
            this.container.querySelector('.open-sidebar').style.display = 'flex';
            localStorage.setItem('sidebar', 'closed');
        };
        setInterval(() => {
            this.container.querySelectorAll('[data-date]').forEach(element => {
                element.innerHTML = this.formatElapsedTime(element.getAttribute('data-date'));
            });
        }, 120000);
        this._conversationClickHandlers();
    }
    
    

    get APIKey() {
        return this.options.api_key;
    }

    set APIKey(value) {
        this.options.api_key = value;
    }

    get model() {
        return this.options.model;
    }

    set model(value) {
        this.options.model = value;
    }

    get source() {
        return this.options.source;
    }

    set source(value) {
        this.options.source = value;
    }

    get conversations() {
        return this.options.conversations;
    }

    set conversations(value) {
        this.options.conversations = value;
    }

    get selectedConversationIndex() {
        return this.options.selected_conversation;
    }

    set selectedConversationIndex(value) {
        this.options.selected_conversation = value;
    }

    get selectedConversation() {
        return this.conversations[this.selectedConversationIndex];
    }

    set selectedConversation(value) {
        this.conversations[this.selectedConversationIndex] = value;
    } 
    
    get container() {
        return this.options.container;
    }

    set container(value) {
        this.options.container = value;
    }

    get maxTokens() {
        return parseInt(this.options.max_tokens);
    }

    set maxTokens(value) {
        this.options.max_tokens = parseInt(value);
    }

}