import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../mbg-plugin-template.js';

describe('MbgPluginTemplate', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<mbg-plugin-template></mbg-plugin-template>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
