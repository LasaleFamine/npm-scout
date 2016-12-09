import test from 'ava';
import fn from './src/index';

test('check packageJson', async t => {
  const json = await fn('yarn', 'yarnpkg');
  t.is(json.packageJson.name, 'yarn');
  t.truthy(json.packageJson.dependenciesCount);
  t.truthy(json.packageJson.maintainersCount);
});

test('check repository', async t => {
  const json = await fn('yarn', 'yarnpkg');
  t.is(json.repository.full_name, 'yarnpkg/yarn');
  t.truthy(json.repository.description);
  t.truthy(json.repository.commit.message);
  t.truthy(json.repository.commit.url);
  t.truthy(json.repository.commit.date);
});

test('reject when repo not exist', async t => {
  t.throws(fn('is', 'wrong'), 'Repository wrong/is doesn\'t exist');
});
