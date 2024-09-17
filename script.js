
let slideIndex = 0;
showSlides();

	 function showSlides() 
	{
		let i;
		const slides = document.getElementsByClassName("script");
		for (i = 0; i < slides.length; i++) 
		{
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) 
		{ 
			slideIndex = 1;
		}
		slides[slideIndex - 1].style.display = "block";
		setTimeout(showSlides, 2000); // Change image every 2 seconds
	}


function searchCountries() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('country-select');
    filter = input.value.toLowerCase(); // Convert filter to lowercase for case-insensitive comparison
    table = document.querySelector('.countries-table table');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < td.length; j++) {
            let country = td[j].getElementsByTagName('p')[0];
            if (country) {
                txtValue = country.textContent || country.innerText;
                const countryText = txtValue.toLowerCase();

                // Explicitly check for "UK" and "South Africa" without converting to lowercase
                if (filter === 'all' || countryText.indexOf(filter) > -1 || (filter === 'uk' && countryText.includes('united kingdom')) || (filter === 'southafrica' && countryText.includes('south africa'))) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            // Display matching row and move it to the top
            tr[i].style.display = '';
            if (i > 0) {
                table.insertBefore(tr[i], tr[0]);
            }
        } else {
            tr[i].style.display = 'none';
        }
    }
}
function openRequestForm() {
    const formWindow = window.open('forms/request_country.html', 'requestFormWindow', 'width=600,height=400');
}
function showThankYouMessage() {
    // Display thank you message on form submission
    const formWindow = window.open('forms/thank_you.html', 'requestFormWindow', 'width=600,height=400');
    if (formWindow) {
        formWindow.document.body.innerHTML = '<h2>Thank you for your request! Check back periodically for updates.</h2>';
    }
    window.close(); // Close the pop-up window after submission
}

// Function for star ratings
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const selectedStars = document.getElementById('selectedStars');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-value'));
            selectedStars.textContent = rating;
            highlightStars(rating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('rated');
            } else {
                star.classList.remove('rated');
            }
        });
    }
});
// JavaScript for search filtering
document.addEventListener('DOMContentLoaded', function() {
    const countryDropdown = document.getElementById('country');
    const countryOptions = countryDropdown.getElementsByTagName('option');

    document.getElementById('dishName').addEventListener('input', function() {
        const input = this.value.toLowerCase();
        for (let i = 0; i < countryOptions.length; i++) {
            const optionText = countryOptions[i].innerText.toLowerCase();
            if (optionText.indexOf(input) !== -1) {
                countryOptions[i].style.display = '';
            } else {
                countryOptions[i].style.display = 'none';
            }
        }
    });
});
// Function to start the countdown timer in catering
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2023-12-31').getTime();

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = eventDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>${days}d</div>
            <div>${hours}h</div>
            <div>${minutes}m</div>
            <div>${seconds}s</div>
        `;

        if (distance < 0) {
            clearInterval(updateTimer);
            countdownElement.innerHTML = 'Event has ended!';
        }
    }

    const updateTimer = setInterval(updateCountdown, 1000);
    updateCountdown();
});