document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('founderModal');
    const modalName = document.getElementById('modalName');
    const modalStory = document.getElementById('modalStory');
    const closeBtn = document.querySelector('.close');
    const founderPhotos = document.querySelectorAll('.founder-photo');
    
    // Founder stories data
    const founderStories = {
        1: {
            name: "Alex Chen",
            email: "alex@visionagent.ai",
            linkedin: "https://linkedin.com/in/alexchen-ai",
            story: `
                <p>Alex is a Stanford PhD in Computer Science with a focus on machine learning and computer vision. Before co-founding Vision Agent, Alex spent 4 years at Google Research working on advanced AI systems.</p>
                <p>During graduate school, Alex published 15 papers in top-tier conferences including CVPR, ICCV, and NeurIPS. Their research focused on making AI more accessible and interpretable, which became the foundation for Vision Agent's mission.</p>
                <p>Alex grew up in San Francisco and has always been passionate about democratizing technology. When not coding, Alex enjoys hiking in the Bay Area and playing piano.</p>
            `
        },
        2: {
            name: "Sam Rodriguez",
            email: "sam@visionagent.ai",
            linkedin: "https://linkedin.com/in/samrodriguez-cv",
            story: `
                <p>Sam is a computer vision expert with a Master's degree from Stanford and 6 years of industry experience. Before Vision Agent, Sam was a senior engineer at Tesla's Autopilot team, where they worked on real-time object detection and tracking systems.</p>
                <p>Sam's expertise spans the entire computer vision pipeline, from data collection and annotation to model deployment and optimization. They have a particular talent for making complex AI systems run efficiently in production environments.</p>
                <p>Originally from Austin, Texas, Sam is passionate about renewable energy and sustainable technology. In their free time, Sam enjoys rock climbing and building custom mechanical keyboards.</p>
            `
        },
        3: {
            name: "Jordan Kim",
            email: "jordan@visionagent.ai",
            linkedin: "https://linkedin.com/in/jordankim-design",
            story: `
                <p>Jordan combines a design background with technical expertise, holding degrees in both Computer Science and Human-Computer Interaction from Stanford. Before Vision Agent, Jordan led product design at Figma, focusing on developer tools and API experiences.</p>
                <p>Jordan believes that the best technology is invisible to the user. Their work focuses on creating intuitive interfaces that make powerful AI capabilities accessible to developers of all skill levels.</p>
                <p>Born in Seoul and raised in Seattle, Jordan is fluent in Korean and English. They're passionate about inclusive design and spend weekends volunteering to teach coding to underrepresented communities.</p>
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