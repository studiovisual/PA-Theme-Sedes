<?php

$sede = getSiteInfo();

$campo = $sede['ct_headquarter'];
$adress = $sede['ct_adress'];
$telephone = $sede['ct_telephone'];
$facebook = $sede['sn_facebook'];
$twitter = $sede['sn_twitter'];
$youtube = $sede['sn_youtube'];
$instagram = $sede['sn_instagram'];
$menus = PaThemeHelpers::getGlobalMenu('global-footer');
?>

<footer class="pa-footer pt-5">
  <div class="container pb-5">
    <div class="row">
      <div class="col-2 d-flex flex-column justify-content-xl-between">
        <div class="d-flex flex-column align-items-center align-items-xl-start px-5 px-xl-0">
          <?php get_template_part('components/menu/footer-logo', 'logo', ['campo' => $campo]); ?>
        </div>
      </div>
      <div class="col-7 d-none d-xl-block">
        <?php if (is_array($menus) && !empty($menus)) : ?>
          <?php foreach ($menus as $menu) : ?>
            <?php if (isset($menu->itens) && !empty($menu->itens)) : ?>
              <div class="pa-menu">
                <ul class="list-unstyled d-flex justify-content-between">
                  <?php foreach ($menu->itens as $item) : ?>
                    <li class="item-menu">
                      <a href="<?= $item->url ?>" title="<?= $item->title ?>" target="<?= !empty($item->target) ? $item->target : '_self' ?>"><?= $item->title ?></a>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </div>
            <?php endif; ?>
          <?php endforeach; ?>
        <?php endif; ?>

        <div class="pa-contact">
          <?php if ($adress) {
            ?><span class="pa-adress d-block text-center text-md-start lh-lg"><?= $adress ?></span><?php
          } ?>
        </div>
      </div>
      
      <div class="col-3">
        <?php if ($facebook || $twitter || $youtube || $instagram): ?>
          <div class="pa-social-network align-items-start d-none d-lg-flex">
            <span><?= _e('Our social networks', 'iasd'); ?></span>
            <div class="icons ml-4">
              <?php if ($facebook) {
                ?><a href="<?= $facebook ?>" title="Facebook"><i class="fab fa-facebook-f mr-3"></i></a><?php
              } ?>
              <?php if ($twitter) {
                ?><a href="<?= $twitter ?>" title="Twitter"><i class="fab fa-twitter mr-3"></i></a><?php
              } ?>
              <?php if ($youtube) {
                ?><a href="<?= $youtube ?>" title="Youtube"><i class="fab fa-youtube mr-3"></i></a><?php
              } ?>
              <?php if ($instagram) {
                ?><a href="<?= $instagram ?>" title="Instagram"><i class="fab fa-instagram"></i></a><?php
              } ?>
            </div>
          </div>

        <?php endif; ?>
      </div>
    </div>
  </div>
  
  <?php get_template_part('components/menu/copyright', 'copyright'); ?>
</footer>
