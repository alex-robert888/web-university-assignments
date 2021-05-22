<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit716b4adf6984f9bc1638366083b593fa
{
    public static $files = array (
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Ctype\\' => 23,
            'Src\\' => 4,
        ),
        'D' => 
        array (
            'Dotenv\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'Src\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Dotenv\\' => 
        array (
            0 => __DIR__ . '/..' . '/vlucas/phpdotenv/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit716b4adf6984f9bc1638366083b593fa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit716b4adf6984f9bc1638366083b593fa::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit716b4adf6984f9bc1638366083b593fa::$classMap;

        }, null, ClassLoader::class);
    }
}
