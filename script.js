document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('founderModal');
    const modalName = document.getElementById('modalName');
    const modalStory = document.getElementById('modalStory');
    const closeBtn = document.querySelector('.close');
    const founderPhotos = document.querySelectorAll('.founder-photo');
    
    // Founder stories data
    const founderStories = {
        1: {
            name: "Felipe Bononi Bello",
            email: "fbononibello@gmail.com",
            linkedin: "https://www.linkedin.com/in/felipe-bononi-bello-6a8362201/",
            story: `
                <p>My passion is making complex technology simple for people. I believe anyone should be able to add powerful computer vision to their ideas — no coding required. That's what we're building at InstantVision. If you have something you wish your camera could detect, I want to hear about it.</p>
    
    <p>I discovered my passion for programming as an Aerospace Engineering undergraduate at TU Delft. Afterwards, I went on to a master’s in Robotics focused on drones. While pursuing my degree, I joined Team Epoch—Delft University’s award‑winning machine learning team—collaborating with Iggy and Kenzo to tackle advanced computer vision challenges, ranging from medical to geological imaging.</p>
    
    <p>My view for InstantVision is to make Computer Vision as easy as possible. You tell us what you want to detect, maybe upload some example, then we take it from there. A custom Computer Vision model that suits your needs. Whether it is detecting dogs at home or meteors in the sky.</p>

            `
        },
        2: {
            name: "Ignace Konig",
            email: "sappie.konig@gmail.com",
            linkedin: "https://www.linkedin.com/in/ignace-konig-52b965205/",
            story: `
<p>I fell in love with machine learning when I was 13, because of how dramatically it increased the number of problems we could solve using code.</p>
<p>I went on to experiment with machine learning and deep learning algorithms on my own, and led a team of students that automated invoice digitization using deep learning.</p>
<p>Then, I went on to be chief engineer at the student team Epoch in Delft, which participates in AI competitions.</p>
<p>Now, I want to enable the next leap in programming, in the form of making it possible for everyone to customize and deploy these machine learning models.</p>
            `
        },
        3: {
            name: "Kenzo Heijman",
            email: "kenzoheijman@hotmail.com",
            linkedin: "https://www.linkedin.com/in/kenzo-h-6253411a4/",
            story: `
		<p>I like tackling big problems, and iterating over solutions until they are as close to perfect as possible</p>
                <p>I study Computer Science and Engineering at TU Delft, and have volunteered at the university's AI team (Team Epoch) during the last year. I also have experience working as a Machine Learning Engineer at a Dutch health insurance agency, as well as having spearheaded many projects during my time at Epoch.</p>
                <p>I'm deeply interested in the development of autonomous systems and agents, believing they enable people to focus their full attention on solving meta-problems rather than getting bogged down in every small detail.</p>
                <p>On the personal side, im active in European politics and like to play chess.</p>
            `
        }
    };
    
    // Function to open modal
    function openModal(founderId) {
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
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add both click and touch event listeners to founder photos
    founderPhotos.forEach(photo => {
        const founderId = photo.getAttribute('data-founder');
        
        // Handle click events
        photo.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(founderId);
        });
        
        // Handle touch events for better mobile support
        photo.addEventListener('touchend', function(e) {
            e.preventDefault();
            openModal(founderId);
        });
        
        // Improve accessibility
        photo.setAttribute('tabindex', '0');
        photo.setAttribute('role', 'button');
        photo.setAttribute('aria-label', `View ${founderStories[founderId]?.name || 'founder'} profile`);
        
        // Handle keyboard navigation
        photo.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(founderId);
            }
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
    
    // Handle touch events on close button
    closeBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        closeModal();
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Handle touch events for closing modal by tapping outside
    window.addEventListener('touchend', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    console.log('Vision Agent website loaded');
});
