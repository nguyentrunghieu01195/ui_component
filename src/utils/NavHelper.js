/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 15:30:38 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

const changeTabActive = info => {
	document.getElementsByClassName('tab-child').forEach((m, idx) => {
		m.classList.remove('active');
		if(m.getAttribute('href') === '#'+info.tab_id){
			m.classList.add('active');
		}
	});

	document.getElementsByClassName('nav-link').forEach((m, idx) => {
		m.classList.remove('active');
		if(m.getAttribute('href') === '#'+info.tab_id){
			m.classList.add('active');
		}
	});
};

const changeDropdownActive = info => {
	document.getElementById(`${info.id_ul}`).getElementsByClassName(`nav-link`).forEach((m, idx) => {
		m.classList.remove('active');
	});
	document.getElementById(info.parent).classList.add('active');
	document.getElementsByClassName('dropdown-item').forEach((m, idx) => {
		m.classList.remove('active');
		if(m.getAttribute('href') === '#'+info.tab_id) {
			m.classList.add('active');
		}
	});
};

export { changeTabActive, changeDropdownActive };