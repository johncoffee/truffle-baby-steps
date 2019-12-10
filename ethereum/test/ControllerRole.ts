import { ControllerRoleInstance } from '../build/contract-interfaces/index'

const ControllerRole = artifacts.require('./ControllerRole')

contract('Controller role', ([deployer, acc1, acc2]) => {

  it('set controllers through constructor', async () => {

    const instance: ControllerRoleInstance = await ControllerRole.new([acc1, acc2])

    const controllers = await instance.getControllers()

    assert.isTrue(controllers.includes(acc1))
    assert.isTrue(controllers.includes(acc2))
  })

  it('set controllers through method', async () => {
    const instance: ControllerRoleInstance = await ControllerRole.new([])
    await instance.setControllers([acc1, acc2])
    const controllers = await instance.getControllers()
    assert.isTrue(controllers.includes(acc1))
    assert.isTrue(controllers.includes(acc2))
  })

})