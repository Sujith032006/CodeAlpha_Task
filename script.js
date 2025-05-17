const images = [
    
    { src: 'https://picsum.photos/id/1015/300/200', alt: 'Mountain Lake', category: 'nature' },
    { src: 'https://picsum.photos/id/1016/300/200', alt: 'Forest Path', category: 'nature' },
    { src: 'https://picsum.photos/id/1018/300/200', alt: 'River Valley', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Sunset Field', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80', alt: 'Snowy Mountain', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80', alt: 'Desert Dunes', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', alt: 'Ocean Waves', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Rocky Cliffs', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80', alt: 'Autumn Forest', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Waterfall', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'River in Forest', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', alt: 'Mountain Stream', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80', alt: 'Lush Valley', category: 'nature' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', alt: 'Sunrise Over Lake', category: 'nature' },

    
    { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80', alt: 'Dog', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Elephant', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Lion', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80', alt: 'Horse', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80', alt: 'Sheep', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', alt: 'Goat', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Wolf', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80', alt: 'Bear', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80', alt: 'Rabbit', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', alt: 'Fox', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', alt: 'Deer', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80', alt: 'Monkey', category: 'animals' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Zebra', category: 'animals' },

    // Birds (removed 'Kingfisher', 'Parrot')
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', alt: 'Eagle', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', alt: 'Sparrow', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80', alt: 'Flamingo', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Peacock', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80', alt: 'Owl', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Woodpecker', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Robin', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80', alt: 'Swan', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80', alt: 'Duck', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', alt: 'Goose', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80', alt: 'Pigeon', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Seagull', category: 'birds' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', alt: 'Canary', category: 'birds' }
];

// Render gallery images by category
function renderGallery(category) {
    const gallery = document.querySelector('.gallery');
    let filtered = images;
    if (category && category !== 'all') {
        filtered = images.filter(img => img.category === category);
    }
    gallery.innerHTML = filtered.map(img => `<img src="${img.src}" alt="${img.alt}" class="gallery-img">`).join('');
}

// Initial render (all)
renderGallery('all');

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-img')) {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
        modalImg.alt = e.target.alt;
    }
});

// Close modal on close button click
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Sidebar category filter
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.category);
    });
});
// Set 'All' as active by default
categoryBtns[0].classList.add('active'); 