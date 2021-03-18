import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | lets learn test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(this.element.querySelectorAll('.pic').length,2);

    assert.equal(currentURL(), '/pictures');

    await click('.index');

    assert.equal(currentURL(), '/pictures');

    await click('.menu-about');

    assert.equal(currentURL(), '/about');

    await click('.menu-contact');

    assert.equal(currentURL() , '/contact');

  });

  test('visiting /about', async function(assert) {

    await visit('/about');

    assert.equal(currentURL(), '/about');

    await click('.button');

    assert.equal(currentURL(), '/contact');
  })

  test('visiting /contact', async function(assert) {

    await visit('/contact');

    assert.equal(currentURL(), '/contact');

    await click('.button');

    assert.equal(currentURL(), '/about');
  })
});
