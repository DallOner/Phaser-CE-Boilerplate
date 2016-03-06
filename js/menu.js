var menuState = {

    create: function () {

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.image(15, 80, 'boiler-logo');
        game.add.plugin(Phaser.Plugin.Inspector);

    }

};
