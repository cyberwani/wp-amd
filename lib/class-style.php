<?php
/**
 * Global Custom CSS styles
 * Custom Styles Customizer
 * Uses theme customization API
 *
 * @author usabilitydynamics@UD
 * @see https://codex.wordpress.org/Theme_Customization_API
 * @version 0.1
 * @module UsabilityDynamics\AMD
 */
namespace UsabilityDynamics\AMD {

  if( !class_exists( 'UsabilityDynamics\AMD\Style' ) ) {

    class Style extends \UsabilityDynamics\AMD\Scaffold {
      
      public $name = 'amd_customizer_style';
      
      /**
       * Constructor
       *
       */
      public function __construct( $args = array() ) {
      
        parent::__construct( $args );
        
        //** Adds settings to customizer */
        if( !did_action( 'customize_register' ) ) {
          add_action( 'customize_register', array( &$this, 'customize_register' ) );
        }
        
        if( !did_action( 'customize_preview_init' ) ) {
          add_action( 'customize_preview_init', array( &$this, 'customize_live_preview' ) );
        }
        
      }
      
      /**
       * All our sections, settings, and controls are added here
       *
       * @param object $wp_customize Instance of the WP_Customize_Manager class
       * @see wp-includes/class-wp-customize-manager.php
       */
      function customize_register( $wp_customize ) {
        
        //** Configure Section. */
        $wp_customize->add_section( 'amd_custom_style', array(
          'title'    => __( 'Custom Styles' ),
          'description' => __( 'Handle custom CSS styles that will be loaded after all other styles.' ),
          'capability' => 'edit_theme_options',
          'priority' => -20
        ));
        
        //** Stores raw CSS. */
        $wp_customize->add_setting( $this->name, array(
          'capability' => 'edit_theme_options',
          'transport' => 'postMessage'
        ));
        
        //** Input for CSS Code. */
        $wp_customize->add_control( new Customize_Editor_Control( $wp_customize, $this->name, array(
          'label'   => __( 'Styles' ),
          'section' => 'amd_custom_style',
          'priority' => 10
        )));
        
        /*
        // Minification Option.
        $wp_customize->add_setting( 'custom-style-minify', array(
          'default'       => false,
          'type'          => 'theme_mod',
          'capability'    => 'edit_theme_options',
          'transport'     => 'postMessage'
        ));

        // Caching Option.
        $wp_customize->add_setting( 'custom-style-cache', array(
          'default'       => true,
          'type'          => 'theme_mod',
          'capability'    => 'edit_theme_options',
          'transport'     => 'postMessage'
        ));
        
        // Basic Checkbox.
        $wp_customize->add_control( 'custom-style-minify', array(
          'label'   => __( 'Minify Output' ),
          'settings' => 'custom-style-minify',
          'section' => 'style-customizer',
          'type'    => 'checkbox',
          'priority' => 20
        ));

        // Basic Checkbox.
        $wp_customize->add_control( 'custom-style-cache', array(
          'label'   => __( 'Allow Caching' ),
          'settings' => 'custom-style-cache',
          'section' => 'style-customizer',
          'type'    => 'checkbox',
          'priority' => 30
        ));

        // Make Setting Magical.
        $wp_customize->get_setting( 'custom-style' )->transport = 'postMessage';
        $wp_customize->get_setting( 'custom-style-minify' )->transport = 'postMessage';
        $wp_customize->get_setting( 'custom-style-cache' )->transport = 'postMessage';
        
        //*/
        
        return $wp_customize;
      }
      
      /**
       * Used by hook: 'customize_preview_init'
       * 
       * @see add_action( 'customize_preview_init', $func )
       * @author peshkov@UD
       */
      function customize_live_preview() {
        wp_enqueue_script( 'wp-amd-themecustomizer', WP_AMD_URL . 'scripts/wp.amd.customizer.style.js', array( 'jquery','customize-preview' ), '', true );
        wp_localize_script( 'wp-amd-themecustomizer', 'wp_amd_themecustomizer', $this->args );
      }
      
    }
    
  }

}


      