var bootState = {

    create: function () {

        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Initial Load State
        game.state.start('load');
    }
};
