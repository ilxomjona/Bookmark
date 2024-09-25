const elHamburgerIcon = document.querySelector('.hamburger-icon');
const elNavbar = document.querySelector('.site-nav');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');
const elFeatureaLinks = document.querySelectorAll('.features__link');
const elFeaturesItems = document.querySelectorAll('.features__item');
const elFeaturesInners = document.querySelectorAll('.features__inner');
const elFaqItemQuetions = document.querySelectorAll('.faq__item-quetion');

elFaqItemQuetions.forEach(elFaqItemQuetion => {
	elFaqItemQuetion.addEventListener('click', () => {
		const activeItem = document.querySelector('.faq__item-quetion.active');
		if (activeItem && activeItem !== elFaqItemQuetion) {
			activeItem.classList.remove('active');
			activeItem.nextElementSibling.style.maxHeight = null;
		}

		elFaqItemQuetion.classList.toggle('.active');
		const answer = elFaqItemQuetion.nextElementSibling;
		if (elFaqItemQuetion.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		} else {
			answer.style.maxHeight = null;
		}
	});
});

function removeItem() {
	elFeaturesInners.forEach(elFeaturesInner => {
		elFeaturesInner.classList.remove('active');
	});
}
elHamburgerIcon.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});

elCloseNavbar.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});

elFeatureaLinks.forEach(elFeatureaLink => {
	elFeatureaLink.addEventListener('click', e => {
		e.preventDefault();

		// item active
		elFeaturesItems.forEach(elFeaturesItem => {
			elFeaturesItem.classList.remove('active');
		});

		elFeatureaLink.parentElement.classList.add('active');

		removeItem();

		const ItemTab = document.querySelector(elFeatureaLink.dataset.tab);
		ItemTab.classList.add('active');
		console.log(ItemTab);
	});
});
