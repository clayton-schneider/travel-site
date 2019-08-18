import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/sticky-header';
import $ from 'jQuery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyheader = new StickyHeader();