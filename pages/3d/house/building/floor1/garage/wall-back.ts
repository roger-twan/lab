import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/utils/generateCubeShape'

const cube = generateCubeShape(
  CONFIG.house.garage.size.width + CONFIG.house.wall.internalDepth,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.internalDepth
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const backWall = new Mesh(cube, material)

backWall.rotateY(-Math.PI / 2)
backWall.position.x =
  CONFIG.house.size.depth -
  CONFIG.house.garage.size.width -
  CONFIG.house.wall.externalDepth
backWall.position.z = CONFIG.house.wall.externalDepth

export default backWall
