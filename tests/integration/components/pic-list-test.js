import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pic-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.picture = {
      "albumId": 3,
      "id": 126,
      "title": "id reiciendis neque voluptas explicabo quae",
      "url": "https://via.placeholder.com/600/7ef62f",
      "thumbnailUrl": "https://via.placeholder.com/150/7ef62f"
    }
  })

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{pic-list picture=picture}}`);

    assert.equal(this.element.querySelector('img')['src'],"https://via.placeholder.com/150/7ef62f");
  
    await click('.image');

    assert.equal(this.element.querySelector('img')['src'],"https://via.placeholder.com/600/7ef62f");
  
    await click('.image')

    assert.equal(this.element.querySelector('img')['src'],"https://via.placeholder.com/150/7ef62f");
    
  });
});
