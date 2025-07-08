document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('founderModal');
    const modalName = document.getElementById('modalName');
    const modalStory = document.getElementById('modalStory');
    const closeBtn = document.querySelector('.close');
    const founderPhotos = document.querySelectorAll('.founder-photo');
    
    // Founder stories data
    const founderStories = {
        1: {
            name: "Felipe",
            email: "felipe@visionagent.ai",
            linkedin: "https://linkedin.com/in/felipe-placeholder",
            story: `
                <p>[Placeholder for Felipe's story - TU Delft background, AI university team experience, CEO role, vision for the company]</p>
                <p>[Add details about Felipe's specific contributions to the project and leadership experience]</p>
                <p>[Personal interests and background information]</p>
            `
        },
        2: {
            name: "Ignace",
            email: "ignace@visionagent.ai",
            linkedin: "https://linkedin.com/in/ignace-placeholder",
            story: `
                <p>[Placeholder for Ignace's story - TU Delft background, AI university team experience, CTO role, technical expertise]</p>
                <p>[Add details about Ignace's technical contributions and computer vision experience]</p>
                <p>[Personal interests and background information]</p>
            `
        },
        3: {
            name: "Kenzo",
            email: "kenzo@visionagent.ai",
            linkedin: "https://linkedin.com/in/kenzo-placeholder",
            story: `
                <p>[Placeholder for Kenzo's story - TU Delft background, AI university team experience, CPO role, product vision]</p>
                <p>[Add details about Kenzo's product development experience and vision for user experience]</p>
                <p>[Personal interests and background information]</p>
            `
        }
    };
    
    // Add click event listeners to founder photos
    founderPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            const founderId = this.getAttribute('data-founder');
            const founder = founderStories[founderId];
            
            if (founder) {
                modalName.textContent = founder.name;
                modalStory.innerHTML = founder.story + `
                    <div class="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:${founder.email}">${founder.email}</a></p>
                        <p><strong>LinkedIn:</strong> <a href="${founder.linkedin}" target="_blank" rel="noopener noreferrer">View Profile</a></p>
                    </div>
                `;
                modal.style.display = 'block';
            }
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    console.log('Vision Agent website loaded');
});