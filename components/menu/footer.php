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
  <div class="container">
    <div class="row">
      <div class="col-lg-2 col-12 d-flex flex-column justify-content-xl-between">
        <div class="d-flex flex-column align-items-center align-items-xl-start px-5 px-xl-0">
          <?php get_template_part('components/menu/footer-logo', 'logo', ['campo' => $campo]); ?>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-block">
        <?php if (is_array($menus) && !empty($menus)) : ?>
          <?php foreach ($menus as $menu) : ?>
            <?php if (isset($menu->itens) && !empty($menu->itens)) : ?>
              <div class="pa-menu d-none d-lg-block">
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

        <div class="pa-contact mt-2">
          <?php if ($adress) {
            ?><span class="pa-adress d-block lh-lg"><?= $adress ?></span><?php
          } ?>
        </div>
      </div>
      
      <div class="col-lg-4 col-12 d-flex justify-content-end align-items-baseline">
        <?php if ($facebook || $twitter || $youtube || $instagram): ?>
          <div class="pa-social-network align-items-center d-none d-lg-flex">
            <span><?= _e('Our social networks', 'iasd'); ?></span>
            <div class="icons">
              <?php if ($facebook) {
                ?><a href="<?= $facebook ?>" title="Facebook"><i class="fab fa-facebook-f"></i></a><?php
              } ?>
              <?php if ($twitter) {
                ?><a href="<?= $twitter ?>" title="Twitter"><i class="fab fa-twitter"></i></a><?php
              } ?>
              <?php if ($youtube) {
                ?><a href="<?= $youtube ?>" title="Youtube"><i class="fab fa-youtube"></i></a><?php
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
