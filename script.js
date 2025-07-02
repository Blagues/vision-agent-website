document.addEventListener('DOMContentLoaded', function() {
    const tryNowBtn = document.getElementById('tryNowBtn');
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    
    const demoMessages = [
        {
            type: 'user',
            content: 'Create a model to detect pedestrians in crosswalks'
        },
        {
            type: 'ai',
            content: '✅ Pedestrian detection model created! Your model can now identify people in crosswalk areas with 94.2% accuracy.'
        },
        {
            type: 'user',
            content: 'Can you make it work for nighttime footage too?'
        },
        {
            type: 'ai',
            content: '🌙 Enhanced with night vision capabilities! Low-light detection accuracy: 91.8%'
        }
    ];
    
    let currentMessageIndex = 0;
    let isAnimating = false;
    
    function createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = message.content;
        
        messageDiv.appendChild(contentDiv);
        
        if (message.type === 'ai') {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            messageDiv.appendChild(typingDiv);
            
            setTimeout(() => {
                typingDiv.remove();
            }, 1500);
        }
        
        return messageDiv;
    }
    
    function animateMessage(messageElement) {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            messageElement.style.transition = 'all 0.5s ease-out';
            messageElement.style.opacity = '1';
            messageElement.style.transform = 'translateY(0)';
        }, 100);
    }
    
    function cycleDemoMessages() {
        if (isAnimating) return;
        
        isAnimating = true;
        
        chatMessages.innerHTML = '';
        
        demoMessages.forEach((message, index) => {
            setTimeout(() => {
                const messageElement = createMessageElement(message);
                chatMessages.appendChild(messageElement);
                animateMessage(messageElement);
                
                if (index === demoMessages.length - 1) {
                    setTimeout(() => {
                        isAnimating = false;
                    }, 1500);
                }
            }, index * 2000);
        });
    }
    
    function addInteractiveEffects() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        const heroTitle = document.querySelector('.hero-title');
        let hue = 0;
        
        setInterval(() => {
            hue = (hue + 0.5) % 360;
            heroTitle.style.background = `linear-gradient(45deg, hsl(${hue}, 20%, 95%), hsl(${(hue + 30) % 360}, 30%, 98%), hsl(${(hue + 60) % 360}, 20%, 95%))`;
            heroTitle.style.webkitBackgroundClip = 'text';
            heroTitle.style.backgroundClip = 'text';
        }, 150);
    }
    
    function addScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                }
            });
        });
        
        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });
    }
    
    function addParticleEffect() {
        const heroSection = document.querySelector('.hero');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            heroSection.appendChild(particle);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
                50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    tryNowBtn.addEventListener('click', function() {
        this.textContent = 'Coming Soon!';
        this.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        
        setTimeout(() => {
            this.textContent = 'Try it now';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        }, 2000);
        
        cycleDemoMessages();
    });
    
    sendBtn.addEventListener('click', function() {
        cycleDemoMessages();
    });
    
    chatInput.addEventListener('focus', function() {
        cycleDemoMessages();
    });
    
    addInteractiveEffects();
    addScrollEffects();
    addParticleEffect();
    
    setTimeout(() => {
        cycleDemoMessages();
    }, 2000);
    
    setInterval(() => {
        if (!isAnimating) {
            cycleDemoMessages();
        }
    }, 15000);
});