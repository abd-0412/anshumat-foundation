        document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.querySelector('.theme-toggle');
            const body = document.body;
            
            if (localStorage.getItem('theme') === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
            
            themeToggle.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    localStorage.setItem('theme', 'light');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                }
            });
            
            const navToggle = document.querySelector('.nav-toggle');
            const nav = document.querySelector('nav ul');
            
            navToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
            
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    nav.classList.remove('active');
                });
            });
            
            const readMoreButtons = document.querySelectorAll('.read-more');
            const programModal = document.getElementById('program-modal');
            const modalTitle = document.getElementById('modal-program-title');
            const modalContent = document.getElementById('modal-program-content');
            const closeModal = document.querySelector('.close-modal');
            
            const programDetails = {
                1: {
                    title: "Youth Mentorship Program",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1725&q=80",
                    content: `
                        <div class="modal-image">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1725&q=80" alt="Mentorship Program">
                        </div>
                        <div class="modal-text">
                            <p>Our Youth Mentorship Program connects experienced professionals from various fields with young individuals aged 15-24 who are seeking guidance in their educational and career paths.</p>
                            <p>This initiative aims to bridge the gap between academic learning and real-world application by providing mentees with insights, advice, and support from those who have walked the path before them.</p>
                        </div>
                        <div class="modal-highlights">
                            <h4>Program Highlights</h4>
                            <ul>
                                <li>One-on-one pairing with industry professionals</li>
                                <li>Bi-weekly virtual or in-person meetings</li>
                                <li>Career exploration workshops</li>
                                <li>Skill development sessions</li>
                                <li>Networking opportunities with professionals</li>
                                <li>Personalized career roadmaps</li>
                            </ul>
                        </div>
                        <div class="modal-stats">
                            <div class="stat-item">
                                <div class="stat-number">1,200+</div>
                                <div class="stat-label">Successful Matches</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">85%</div>
                                <div class="stat-label">Reported Career Clarity</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">6-12</div>
                                <div class="stat-label">Month Program</div>
                            </div>
                        </div>
                        <div class="modal-text">
                            <p><strong>Duration:</strong> 6-12 month commitment</p>
                            <p><strong>Eligibility:</strong> Open to all young individuals between 15-24 years regardless of educational background.</p>
                            <p>Since its inception in 2018, our mentorship program has successfully paired over 1,200 young individuals with mentors, with 85% of participants reporting increased confidence in their career choices.</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn btn-secondary">Download Brochure</button>
                            <button class="modal-btn btn-primary">Apply Now</button>
                        </div>
                    `
                },
                2: {
                    title: "Digital Literacy Initiative",
                    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
                    content: `
                        <div class="modal-image">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Digital Literacy">
                        </div>
                        <div class="modal-text">
                            <p>Our Digital Literacy Initiative aims to bridge the technology gap by providing essential digital skills training to underserved communities, with a focus on seniors, low-income families, and rural populations.</p>
                        </div>
                        <div class="modal-highlights">
                            <h4>Program Components</h4>
                            <ul>
                                <li>Basic computer skills training</li>
                                <li>Internet safety and cybersecurity awareness</li>
                                <li>Using online government and health services</li>
                                <li>Job search and resume building assistance</li>
                                <li>Mobile device proficiency</li>
                                <li>Social media and communication tools</li>
                            </ul>
                        </div>
                        <div class="modal-stats">
                            <div class="stat-item">
                                <div class="stat-number">5,000+</div>
                                <div class="stat-label">Individuals Trained</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">92%</div>
                                <div class="stat-label">Increased Confidence</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Free of Charge</div>
                            </div>
                        </div>
                        <div class="modal-text">
                            <p><strong>Accessibility:</strong> All courses are offered free of charge with options for virtual or in-person learning. We provide devices for use during sessions for those who need them.</p>
                            <p>To date, we've helped over 5,000 individuals gain essential digital skills, with 92% of participants reporting increased confidence in using technology for daily tasks.</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn btn-secondary">Download Brochure</button>
                            <button class="modal-btn btn-primary">Apply Now</button>
                        </div>
                    `
                },
                3: {
                    title: "STEM Education for Girls",
                    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                    content: `
                        <div class="modal-image">
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="STEM Education">
                        </div>
                        <div class="modal-text">
                            <p>Our STEM Education for Girls program encourages and supports young women to pursue careers in science, technology, engineering, and mathematics through hands-on learning, mentorship, and exposure to female role models in STEM fields.</p>
                        </div>
                        <div class="modal-highlights">
                            <h4>Program Offerings</h4>
                            <ul>
                                <li>After-school coding clubs</li>
                                <li>Weekend robotics workshops</li>
                                <li>Summer STEM camps</li>
                                <li>Career panels with women in STEM</li>
                                <li>University preparation guidance</li>
                                <li>Scholarship opportunities</li>
                            </ul>
                        </div>
                        <div class="modal-stats">
                            <div class="stat-item">
                                <div class="stat-number">3,500+</div>
                                <div class="stat-label">Young Women Reached</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">78%</div>
                                <div class="stat-label">Increased STEM Interest</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">3</div>
                                <div class="stat-label">Age Groups</div>
                            </div>
                        </div>
                        <div class="modal-text">
                            <p><strong>Age Groups:</strong> We offer programs tailored for different age groups: 8-12, 13-15, and 16-18.</p>
                            <p>Since 2019, our STEM program has reached over 3,500 young women, with 78% of participants expressing increased interest in pursuing STEM education and careers.</p>
                            <p>We partner with tech companies, universities, and women in STEM professions to provide real-world exposure and mentorship opportunities.</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn btn-secondary">Download Brochure</button>
                            <button class="modal-btn btn-primary">Apply Now</button>
                        </div>
                    `
                },
                4: {
                    title: "Teacher Development Program",
                    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                    content: `
                        <div class="modal-image">
                            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Teacher Training">
                        </div>
                        <div class="modal-text">
                            <p>Our Teacher Development Program focuses on equipping educators with modern teaching methodologies, technological tools, and resources to enhance classroom learning experiences and improve student outcomes.</p>
                        </div>
                        <div class="modal-highlights">
                            <h4>Program Features</h4>
                            <ul>
                                <li>Pedagogical workshops and training sessions</li>
                                <li>Technology integration in the classroom</li>
                                <li>Classroom management strategies</li>
                                <li>Inclusive education practices</li>
                                <li>Curriculum development support</li>
                                <li>Peer learning communities</li>
                            </ul>
                        </div>
                        <div class="modal-stats">
                            <div class="stat-item">
                                <div class="stat-number">2,000+</div>
                                <div class="stat-label">Educators Trained</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">95%</div>
                                <div class="stat-label">Increased Confidence</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">CEUs</div>
                                <div class="stat-label">Certification Provided</div>
                            </div>
                        </div>
                        <div class="modal-text">
                            <p><strong>Certification:</strong> Participants receive professional development certificates and continuing education units (CEUs) upon completion.</p>
                            <p>We've trained over 2,000 educators since 2020, with 95% reporting increased confidence in using new teaching methods and technologies in their classrooms.</p>
                            <p>Our program also includes a mentorship component where experienced educators guide newer teachers, creating a supportive professional community.</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn btn-secondary">Download Brochure</button>
                            <button class="modal-btn btn-primary">Apply Now</button>
                        </div>
                    `
                }
            };
                        readMoreButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const programId = this.getAttribute('data-program');
                    const program = programDetails[programId];
                    
                    if (program) {
                        modalTitle.textContent = program.title;
                        modalContent.innerHTML = program.content;
                        programModal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
                        function closeProgramModal() {
                programModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            closeModal.addEventListener('click', closeProgramModal);
                        programModal.addEventListener('click', function(e) {
                if (e.target === programModal) {
                    closeProgramModal();
                }
            });
                        document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && programModal.classList.contains('active')) {
                    closeProgramModal();
                }
            });
            
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !subject || !message) {
                    showFormMessage('Please fill in all fields.', 'error');
                    return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showFormMessage('Please enter a valid email address.', 'error');
                    return;
                }
                
                showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                
            });
            
            function showFormMessage(text, type) {
                formMessage.textContent = text;
                formMessage.className = 'form-message ' + type;
                formMessage.style.display = 'block';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
            const quotes = [
                {
                    text: "Education is the most powerful weapon which you can use to change the world.",
                    author: "Nelson Mandela"
                },
                {
                    text: "The beautiful thing about learning is that no one can take it away from you.",
                    author: "B.B. King"
                },
                {
                    text: "Knowledge is like a garden; if it is not cultivated, it cannot be harvested.",
                    author: "African Proverb"
                },
                {
                    text: "Mentorship is a two-way street where both parties grow and learn from each other.",
                    author: "Unknown"
                },
                {
                    text: "The function of education is to teach one to think intensively and to think critically.",
                    author: "Martin Luther King Jr."
                }
            ];
            
            const quoteText = document.querySelector('.quote-text');
            const quoteAuthor = document.querySelector('.quote-author');
            let quoteIndex = 0;
            
            function rotateQuotes() {
                quoteIndex = (quoteIndex + 1) % quotes.length;
                const quote = quotes[quoteIndex];
                quoteText.style.opacity = 0;
                quoteAuthor.style.opacity = 0;
                setTimeout(() => {
                    quoteText.textContent = quote.text;
                    quoteAuthor.textContent = `- ${quote.author}`;
                    quoteText.style.opacity = 1;
                    quoteAuthor.style.opacity = 1;
                }, 1000);
            }
            setInterval(rotateQuotes, 8000);
            function createLeaves() {
                const hero = document.querySelector('.hero');
                const leafCount = 8;   
                for (let i = 0; i < leafCount; i++) {
                    const leaf = document.createElement('div');
                    leaf.classList.add('leaf');
                    const left = Math.random() * 100;
                    const top = Math.random() * 20;
                    const size = 20 + Math.random() * 20;
                    const delay = Math.random() * 10;       
                    leaf.style.left = `${left}%`;
                    leaf.style.top = `${top}%`;
                    leaf.style.width = `${size}px`;
                    leaf.style.height = `${size}px`;
                    leaf.style.animationDelay = `${delay}s`;
                    const greenVariation = Math.random() * 50;
                    leaf.style.backgroundColor = `rgb(46, ${139 + greenVariation}, 87)`;    
                    hero.appendChild(leaf);
                }
            }            
            createLeaves();
        });