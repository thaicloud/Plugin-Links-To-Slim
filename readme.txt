=== Page Links To Slim ===

Contributors: markjaquith, knowmike
Donate link: http://txfx.net/wordpress-plugins/donate  
Tags: page, redirect, link, external link, repoint, slim
Requires at least: 3.9.2  
Tested up to: 4.2  
Stable tag: 1.0.0

Lets you make a WordPress page (or other content type) link to an external URL of your choosing, instead of its WordPress URL.

== Description ==

Forked from Mark Jaquith's "Page Links To" plugin, version 2.9.6
This is a slimmed down version; removes testing data/functionality & language support

Original description: This plugin allows you to make a WordPress page or post link to a URL of your choosing, instead of its WordPress page or post URL. It also will redirect people who go to the old (or "normal") URL to the new one you've chosen.
This functionality is useful for setting up navigational links to non-WordPress sections of your site or to off-site resources.

== Installation ==

1. Upload the `page-links-to` folder to your `/wp-content/plugins/` directory.

2. Activate the "Page Links To" plugin in your WordPress administration interface.

3. Create (or edit) a page or a post to have a title of your choosing (leave the content blank).

4. Down below, in the advanced section, find the Page Links To section, select "An alternate URL", and add a URL of your choosing.

5. Optionally check the box to enable link opening in a new browser window.

6. Save the post or page.

7. Done! Now that post or page will point to the URL that you chose.

== Screenshots ==

1. The Page Links To meta box in action

== Frequently Asked Questions ==

= How do I make it so that a page doesn't link to anything? I'd like to use it as a dummy container. =

Just use "#" as the link. That won't go anywhere.

= Can this be used to repoint categories to an arbitrary URL? =

Not currently. Please contact me if you're interested in that functionality.

= My links are sending me to http://myblog.com/site-i-wanted-to-link-to.com ... why? =

If you want to link to a full URL, you *must* include the `http://` portion.

= Can I link to relative URLs? =

Yes. Linking to `/my-photos.php` is a good idea, as it'll still work if you move your site to a different domain.

== Contribute ==

This fork is not under active development.
Please contribute (or report bugs) to the original project on [Github](https://github.com/markjaquith/page-links-to/).

== Changelog ==

= 1.0.0 =
* Forked from page-links-to plugin, version 2.9.6
